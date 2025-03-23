const express = require('express');
const authMiddleware = require('../middlewares/auth');
const { Carts } = require('../db');
const getAvailable = require('../functions/available');
const router = express.Router();


router.get('/available' , async(req,res)=>{
    const {items}  = req.body;
    const {availableCount , available , notAvailable} = await getAvailable(items)
    console.log(available , availableCount , notAvailable)
})

router.post('/add', async (req, res) => {
    const userId = '67c208f6735b16e10218e8ac';
    const { itemToAdd  } = req.body;

    try {
    
        const cart = await Carts.findOne({ userId: userId, checked_out: false });
        // const user = await Users.findOne({_id : userId , carts : {$elemMatch : {checkout : false}}})
        
        if (!cart ) {
            // creating a new cart
            
            try {
        
                const new_cart = new Carts({
                    items: [itemToAdd],
                    userId: userId,
                    checked_out: false,
                })
                
                await new_cart.save();
                
                return res.status(200).json({
                    items: [itemToAdd],
                    cartId: new_cart._id
                })
                

            } catch (error) {
                
                return res.status(500).json({
                    message: 'something went wrong'
                })
            }
        }
        try {
            
            const existing_product = cart.items.find(item => item.id == itemToAdd.id)
            if (existing_product) {
                
                existing_product.quantity += itemToAdd.quantity
            }
            else {
               
                cart.items.push(itemToAdd)
            }
            
            await cart.save()
            
            return res.status(200).json({
                items: cart.items,
                cartId: cart._id
            })
        } catch (error) {
            
            res.status(500).json({
                message: 'Something went wrong'
            })
        }
    } catch (error) {
        
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
})

router.delete('/:productId' , authMiddleware , async(req,res)=>{
    const {cartId} = req.body
    const productId = req.params.productId
    try {
        const cart = await Carts.findOne({_id : cartId , userId : req.userId , checked_out : false}).populate('items')
        if(!cart ){
            return res.status(404).json({
                message : 'Your cart is empty'
            })
        }

        try {
            const result = await Carts.updateOne({_id : cartId},{$pull : {items : {id : productId}}})

        if(result.matchedCount){
            return res.status(404).json({
                message : 'Porduct is not in the cart'
            })
        }
            return res.status(200).json({
                message : 'Product deleted with id : ' + productId
            })

            
        } catch (error) {
            return res.status(500).json({
                message : 'something went wrong'
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            message : 'something went wrong'
        })
    }
})




module.exports = router
