const cloudinary = require('cloudinary').v2
const dotenv = require('dotenv')
dotenv.config();

cloudinary.config({
    cloud_name: `${process.env.CLOUD_NAME}`,
    api_key: `${process.env.API_KEY}`,
    api_secret: `${process.env.API_SECRET}`,
})

const uploadImages = async (urls , product_name) => {
    try {
        
        const result = await Promise.all(
            urls.map(async(obj , index)=>{
                try {
                    const result = await cloudinary.uploader.upload(obj.url, {
                      public_id: `image_${index}_${product_name}`
                    });
                    
                    return result;
                  } catch (error) {
                    return null; 
                  }
            })
        )
        return result;
    } catch (error) {
        console.log(error);
    }
}

const deleteImages = async(urls)=>{
    try {
        const result = await Promise.all(
            urls.map(async(obj , index)=>{
                try {
                    const result = await cloudinary.uploader.destroy(obj.public_id)
                    console.log(result)
                    return result;
                } catch (error) {
                    console.log(error)
                    return null
                    
                }
            })
        )
        return result
    } catch (error) {
        console.log(error)
        return []
    }
}

module.exports = {
    uploadImages,
    deleteImages
};

