const dotenv = require('dotenv')
dotenv.config()
const jwt = require('jsonwebtoken')

const key = `${process.env.JWT_SECRET}`


function authMiddleware(req,res,next){
    try {
        const authToken = req.headers.authorization;
        if(!authToken || !authToken.startsWith('Bearer ')){
            return res.status(401).json({
                message : "Invalid request"
            })
        }
        const token = authToken.split('Bearer ')[1];
        const verified = jwt.verify(token , key);
        if(verified){
            req.role = "User"
            req.userId = verified.userId
            next();
        }
        else {
            return res.status(402).json({
                message : "Bad request"
            })
        }
    } catch (error) {
        res.status(500).json({
            message : 'something went wrong'
        })
    }

}

module.exports = authMiddleware;