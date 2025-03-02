const express = require('express');
const router = express.Router();
const userRouter = require('./user')
const productRouter = require('./products')

router.use('/user' , userRouter)
router.use('/product' , productRouter);

module.exports = router