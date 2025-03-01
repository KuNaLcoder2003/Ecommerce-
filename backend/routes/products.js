const express = require('express');
const isAdmin = require('../middlewares/isAdmin')
const {products_schema} = require('../types')
const router = express.Router();
const {Users , Products} = require('../db')
const upload = require('../functions/cloudinary')

router.post('/'   ,  async(req , res)=>{
    const {product_name , category , product_description , quantity , price , product_images} = req.body;
    const userId = req.userId;
    const role = req.role
    try {
        // console.log('1')
        const {success} = products_schema.safeParse({
            product_name,
            category,
            product_description,
            quantity,
            price,
            product_images
        })
        // console.log('2');

        if(!success){
            // console.log('3')
            return res.status(403).json({
                message : 'Insufficient information',
            })
        }
        // console.log('4')
        const product = new Products({
            product_name,
            category,
            product_description,
            quantity,
            price,
            product_images
        })
        // console.log('5')
        upload(product_images[0].url , 'image')
        await product.save();

        // console.log('6')
        return res.status(200).json({
            message : 'Successfully added a new product'
        })
        
    } catch (error) {
        // console.log('7')
        res.status(500).json({
            message : 'Something went wrong'
        })
    }
})



module.exports = router