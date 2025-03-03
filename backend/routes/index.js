const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const productRouter = require('./products')
const orderRouter = require('./order')

router.use('/user' , userRouter)
router.use('/product' , productRouter);
router.use('/order' , orderRouter);
module.exports = router