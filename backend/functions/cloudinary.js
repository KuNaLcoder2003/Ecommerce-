const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
dotenv.config();

cloudinary.config({
    cloud_name: `${process.env.CLOUD_NAME}`,
    api_key: `${process.env.API_KEY}`,
    api_secret: `${process.env.API_SECRET}`,
})

// promise -> resolve or reject 

exports.uploads = async (file , folder)=>{
    try {
        const result = await cloudinary.uploader.upload(file , {
            resource_type : "auto",
            folder : folder
        })
        return {
            url : result.secure_url,
            public_id : result.public_id,
        }
    } catch (error) {
        console.error("Cloudinary Upload Error:", error);
        throw error;
    }
}

