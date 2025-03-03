const express = require('express');
const authMiddleware = require('../middlewares/auth');
const { Products } = require('../db');
const getAvailableProducts = require('../functions/available')

const router = express.Router();


router.post('/', async (req, res) => {
    const { products } = req.body
    // const userId = req.UserId
    try {
        // if(!userId){
        //     return res.status(401).json({
        //         message : 'Cannot proceed with order placement'
        //     })
        // }
        console.log('1')
        const available_products = await getAvailableProducts(products)
        console.log('Before filter : ' , available_products)
        console.log('2')
        let final = available_products.filter(product => product.quantity !== 0);
        console.log('3')
        console.log(final);
        console.log('4')

        let total_amount = 0;
        for(let i =0 ; i < final.length ; i++){
            total_amount+= final[i].quantity*final[i].individual_price
        }
        console.log(total_amount)
        console.log('5')
        
        
       

    } catch (error) {
        res.status(500).json({
            message : 'Something went wrong'
        })
    }
})

module.exports = router