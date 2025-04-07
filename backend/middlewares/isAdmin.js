const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')

const key = `${process.env.JWT_SECRET}`


function isAdmin(req,res,next){
    try {
        const authToken = req.headers.authorization;
        if(!authToken || !authToken.startsWith('Bearer ')){
            return res.status(401).json({
                message : "Invalid request"
            })
        }
        const token = authToken.split('Bearer ')[1];
        const verified = jwt.verify(token , key);
        if(verified && verified.role == 'Admin'){
            req.role = "Admin"
            req.userId = verified.userId
            next();
        }
        else {
            return res.status(402).json({
                message : "Only Admin can make these changes"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message : 'something went wrong'
        })
    }

}

module.exports = isAdmin;