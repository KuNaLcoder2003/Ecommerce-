const express = require('express');
const isAdmin = require('../middlewares/isAdmin')
const authMiddleware = require('../middlewares/auth')
const { products_schema } = require('../types')
const router = express.Router();
const {  Products, Carts } = require('../db')
const { uploadImages, deleteImages } = require('../functions/cloudinary');
const getAvailable = require('../functions/available');

router.post('/', async (req, res) => {
    const { product_name, category, product_description, quantity, price, product_images } = req.body;
    const userId = req.userId;
    const role = req.role
    try {
        const { success } = products_schema.safeParse({
            product_name,
            category,
            product_description,
            quantity,
            price,
            product_images
        })


        if (!success) {

            return res.status(403).json({
                message: 'Insufficient information',
            })
        }

        const result = await uploadImages(product_images, product_name)
        console.log(result)

        let arr = result.map((obj) => {
            return { url: obj.url, public_id: obj.public_id }
        })
        console.log(arr);
        const product = new Products({
            product_name,
            category,
            product_description,
            quantity,
            price,
            product_images: arr
        })

        await product.save();


        return res.status(200).json({
            message: 'Successfully added a new product'
        })

    } catch (error) {

        res.status(500).json({
            message: 'Something went wrong'
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

router.get('/availabe/:cartId' , async(req,res)=>{
    const cartId = req.params.cartId
    try {
        const cart = await Carts.findOne({_id : cartId});
        if(!cart) {
            return res.status(404).json({
                message : 'No active cart'
            })
        }
        const {availableCount , available , notAvailable} = getAvailable(cart.items)
        res.status(200).json({
            availableCount,
            available,
            notAvailable
        })
    } catch (error) {
        res.status(500).json({
            message : 'Something went wrong'
        })
    }
})


module.exports = router