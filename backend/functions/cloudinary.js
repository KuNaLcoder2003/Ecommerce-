const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
dotenv.config();


cloudinary.config({
    cloud_name : `${process.env.CLOUD_NAME}`,
    api_key : `${process.env.API_KEY}`,
    api_secret : `${process.env.API_SECRET}`,
})


const upload = async(url , publicId)=>{
    try {
        if(!url.endsWith('.jpg') || !url.endsWith('.jpeg')){
            return
        }
        const result = await cloudinary.uploader.upload(url , {
            public_id : publicId
        }).catch((error)=>console.log(error))
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = upload;

