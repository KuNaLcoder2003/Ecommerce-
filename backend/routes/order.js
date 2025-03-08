const express = require('express');
const authMiddleware = require('../middlewares/auth');
const { Products, Carts, Orders, Users } = require('../db');
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.get('/available', authMiddleware, async (req, res) => {

})

router.post('/', async (req, res) => {
    const { cartId } = req.body
    const userId = '67c208f6735b16e10218e8ac';

    if (!userId) {
        return res.status(401).json({
            message: 'Cannot proceed with order placement'
        })
    }
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        
        const cart = await Carts.findOne({ _id: cartId }).populate('items').session(session)
      
        if (!cart) {
            
            await session.abortTransaction()
            return res.status(401).json({
                message: 'Error placing order'
            })
        }
        
        let temp_arr = await Promise.all(
            cart.items.map(async (item) => {
                try {
                    const result = await Products.findOne({ _id: item.id }).session(session)
                    if (!result) throw new Error(`Product ${item.id} not found`);
                    return {
                        price: result.price,
                        quantity: item.quantity
                    }
                } catch (error) {
                    await session.abortTransaction();
                    return res.status(500).json({
                        message: 'Error fetching price'
                    })
                }
            })
        )
        
        let totalAmount = temp_arr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        
        const fromUser = await Users.findOne({ _id: req.userId }).session(session)
        
        if (fromUser.balance < totalAmount) {
            
            await session.abortTransaction()
            return res.status(402).json({
                message: 'Insufficient balance'
            })
        }
      
        const new_order = new Orders({
            products: cart.items,
            user_id: userId,
            total_amount: totalAmount,
            payment_status: 'pending',
            cart_id: cartId
        })

        await new_order.save({ session })
        
        for (const item of cart.items) {
            try {
                await Products.findOneAndUpdate({ _id: item.id }, { $inc: { quantity: -item.quantity } }).session(session)
            } catch (error) {
                await session.abortTransaction();
                return res.status(500).json({ message: 'Error' })
            }
        }

        const toUser = await Users.findOne({ role: "Admin" }).session(session)
      
        if (!toUser) {
            console.log('14');
            await session.abortTransaction();
            return res.status(401).json({
                message: 'Error making payment , recipient does not exists'
            })
        }
        
        const r1 = await Users.updateOne({ _id: fromUser._id }, { $inc: { balance: -new_order.total_amount } }).session(session)
       
        const r2 = await Users.updateOne({ role: 'Admin' }, { $inc: { balance: new_order.total_amount } }).session(session)
        
        if (r1.modifiedCount === 0 || r2.modifiedCount === 0 || !r1.acknowledged || !r2.acknowledged) {
            // if payment fails then
    
            await Orders.findOneAndUpdate({ _id: new_order.id }, { payment_status: "unsuccessful" }).session(session)
            
            await Promise.all(cart.items.map(async (item) => {

                try {
                    await Products.findOneAndUpdate({ _id: item.id }, { $inc: { quantity: item.quantity } }).session(session)
                } catch (error) {
                    await session.abortTransaction();
                    return res.status(500).json({
                        message: 'Error'
                    })
                }
            }))
           
            await session.abortTransaction();
            
            return res.status(403).json({
                message: 'Order unsuccessful'
            })
        }
       
        await Orders.findOneAndUpdate({ _id: new_order._id }, { payment_status: "successful" }).session(session)
       
        await Carts.findOneAndUpdate({ _id: cartId }, { checked_out: true }).session(session)
        
        const updatedUser = await Users.findOne({ _id: fromUser._id }).session(session);
        
        res.status(200).json({
            order: true,
            message: 'Order placed successfully',
            balance: updatedUser.balance
        });

        await session.commitTransaction();

    } catch (error) {

        await session.abortTransaction();
        res.status(500).json({
            message: 'Something went wrong'
        })
    }

    finally {
        session.endSession()
    }
})

module.exports = router



// for (const item of cart.items) {
//     try {
//         await Products.findOneAndUpdate({ _id: item.id }, { $inc: { quantity: item.quantity } }).session(session)
//     } catch (error) {
//         await session.abortTransaction();
//         return res.status(500).json({ message: 'Error' })
//     }
// }