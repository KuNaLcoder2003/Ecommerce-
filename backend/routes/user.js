const express = require('express')
const router = express.Router();
const dotenv = require('dotenv');
const { Users } = require('../db');
const { signup_schema, signin_schema } = require('../types')
const jwt = require('jsonwebtoken');
const sendEmail = require('../functions/sendEmail');
const authMiddleware = require('../middlewares/auth');
const cloudinary  = require('cloudinary').v2
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
});

dotenv.config();
const key = `${process.env.JWT_SECRET}`

router.post('/signup', upload.single("avatar"), async (req, res) => {
    const { first_name, last_name, username, password, role } = req.body;
    const avatar = req.file

    try {
        const { success } = signup_schema.safeParse({
            first_name,
            last_name,
            username,
            password,
            role,
        })
        if (!success) {
            return res.status(402).json({
                message: 'Invalid Inputs'
            })
        }
        const user = await Users.findOne({ username: username })
        if (user) {
            return res.status(403).json({
                message: 'User already exists , try signing in'
            })
        }

        console.log(req.file)
        console.log(req.body)
        cloudinary.uploader.upload_stream(
            { public_id: `image_${first_name}_${last_name}` },
            async (error, result) => {
                if (error) return res.status(500).json({ message: "Upload failed" });

                // Save user details to DB (use `result.secure_url` as avatar)
                const new_user = new Users({
                    first_name,
                    last_name,
                    username,
                    password,
                    role,
                    avatar: result.secure_url,
                    balance: Math.floor(Math.random() * 10000)
                })

                await new_user.save()
                console.log(new_user)

                sendEmail(username).catch(console.error);


                const token = jwt.sign({ userId: new_user._id, name: `${new_user.first_name} ${new_user.last_name}`, role: new_user.role }, key)
                res.status(200).json({
                    token,
                    message: 'SignedUp successfully'
                })
            }
        ).end(avatar.buffer);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
            message: "Something went wrong"
        })
    }
})

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log(req.body)
        const { success } = signin_schema.safeParse({
            username,
            password
        })
        if (!success) {
            return res.status(402).json({
                message: 'Invalid Username or Password'
            })
        }
        const user = await Users.findOne({ username: username, password: password })
        if (!user) {
            return res.status(404).json({
                message: 'Cannot find user'
            })
        }

        const token = jwt.sign({ userId: user._id, name: `${user.first_name} ${user.last_name}`, role: user.role }, key)

        res.status(200).json({
            role: user.role,
            token,
            message: 'Logged in successfully'
        })

    } catch (error) {
        res.status(500).json({
            error: error,
            message: "something went worng"
        })
    }
})

router.get('/details', authMiddleware, async (req, res) => {
    const id = req.userId
    try {
        const user = await Users.findOne({ _id: id })
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong'
        })
    }
    
})



module.exports = router;