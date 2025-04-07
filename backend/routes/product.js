const express = require('express');
const isAdmin = require('../middlewares/isAdmin')
const authMiddleware = require('../middlewares/auth')
const { products_schema } = require('../types')
const router = express.Router();
const { Products, Carts } = require('../db')
const getAvailable = require('../functions/available');
const upload = require('../uploads/multer');
const cloudinary = require('../functions/cloudinary')
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

router.post('/',isAdmin ,  upload.array("image"), async (req, res) => {
    const { product_name, category, product_description, quantity, price } = req.body;
    // const product_images = req.files;
    const uploader = async(path) => {
        return await cloudinary.uploads(path , 'Images')
    }
    try {

        const {success} = products_schema.safeParse({
            roduct_name,
                category ,
                product_description,
                quantity ,
                price ,
                product_images,

        })

        if(!success){
            return res.status(400).json({
                done : false,
                message : 'Invalid input type'
            })
        }
        let urls = [];
        
        for(const file of req.files){
            const {path} = file;
            console.log(path);

            const newPath = await uploader(path)
            // console.log(newPath);

            urls.push(newPath)
            fs.unlinkSync(path);
        }
        const new_product = new Products({
            product_name : product_name,
            product_description : product_description,
            price : price,
            category : category,
            quantity : quantity,
            product_images : urls,
        })
        await new_product.save();
        res.status(200).json({
            message : 'Product Added successfully',
            data : new_product
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message : 'Something went wrong'
        })
    }
})

router.get('/:productId', authMiddleware, async (req, res) => {
    try {
        const productId = req.params.productId
        if (productId.length < 3) {
            return res.status(401).json({
                message: 'Bad request'
            })
        }
        const product = await Products.findOne({ _id: productId })
        if (!product) {
            return res.status(402).json({
                message: 'No product found'
            })
        }
        return res.status(200).json({
            product
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})


router.get('/:category', authMiddleware, async (req, res) => {
    const category = req.params.category;
    try {
        const products = await Products.find({
            category: category
        })
        if (products.length == 0) {
            return res.status(404).json({
                message: 'No products found'
            })
        }
        res.status(200).json([
            products
        ])
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

router.delete('/:productId', async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Products.findOne({ _id: productId });
        if (!product) {
            return res.status(402).json({
                message: 'product doesnot exists'
            })
        }
        const results = await deleteImages(product.product_images)
        if (results.length == 0) {
            return res.status(402).json({
                message: 'Error deleting product'
            })
        }
        const e = results.filter(obj => obj.result !== 'ok');
        if (e.length > 0) {
            return res.status(402).json({
                message: 'Error deleting product'
            })
        }

        await product.deleteOne()
        res.status(200).json({
            message: 'Successfully deleted product'
        })
    } catch (error) {

    }
})

router.get('/availabe/:cartId', async (req, res) => {
    const cartId = req.params.cartId
    try {
        const cart = await Carts.findOne({ _id: cartId });
        if (!cart) {
            return res.status(404).json({
                message: 'No active cart'
            })
        }
        const { availableCount, available, notAvailable } = getAvailable(cart.items)
        res.status(200).json({
            availableCount,
            available,
            notAvailable
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

// router.use((req , res , err , next) => {
//     console.log(err);
// })


module.exports = router