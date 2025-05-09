const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req , file , cb){
        cb(null , './uploads')
    } , 
    filename : function(req,file,cb){
        cb(null , Date.now() + '-' + file.originalname)
    }
})

// file validation

const filter = (req , file , cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null , true);
    }
    else {
        // prevent uplaod
        cb({message : 'Unsupported file format'} , false)
    }
}

const upload = multer({
    storage : storage,
    limits : {fileSize : 1024 * 1024 * 5},
    fileFilter : filter
})

module.exports = upload;