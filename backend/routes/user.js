const express = require('express')
const router = express.Router();
const dotenv = require('dotenv');
const {Users , Orders , Products , Reviews , Ratings} = require('../db');
const {signup_schema , signin_schema} = require('../types')
const jwt = require('jsonwebtoken');
const sendEmail = require('../functions/sendEmail')

dotenv.config();

const key = `${process.env.JWT_SECRET}`





router.post('/signup' , async(req , res)=>{
    const {first_name , last_name , username , password , role} = req.body;
    try {
        const {success} = signup_schema.safeParse({
            first_name,
            last_name,
            username,
            password,
            role,
        })
        if (!success){
            return res.status(402).json({
                message : 'Invalid Inputs'
            })
        }
        const user = new Users({
            first_name,
            last_name,
            username,
            password,
            role,
        })

        await user.save()

        sendEmail(username).catch(console.error);
    

        const token = jwt.sign({userId :user._id , name : `${user.first_name} ${user.last_name}` , role : user.role } , key)
        res.status(200).json({
            token,
            message : 'SignedUp successfully'
        })
    } catch (error) {
        res.status(500).json({
            error : error,
            message : "Something went wrong"
        })
    }
})

router.post('/signin' , async(req , res)=>{
    const {username , password} = req.body;
    try {
        const {success} = signin_schema.safeParse({
            username , 
            password
        })
        if(!success){
            return res.status(402).json({
                message : 'Invalid Username or Password'
            })
        }
        const user = await Users.findOne({username : username , password : password})
        if(!user){
            return res.status(404).json({
                message : 'Cannot find user'
            })
        }

        const token = jwt.sign({userId : user._id , name  : `${user.first_name} ${user.last_name}` , role : user.role} , key)

        res.status(200).json({
            role : user.role,
            token,
            message : 'Logged in successfully'
        })

    } catch (error) {
        res.status(500).json({
            error : error,
            message : "something went worng"
        })
    }
})



module.exports = router;