const path = require('path');
const multer = require('multer') 

let   storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'uploads/')          // file location 
    },
    filename : function (req,file, cb){              
        let ext = path.extname(file.originalname) 
        cb(null, Date.now() + ext)                                               // Rename the file with current time tamp & extension
    }
})

let upload = multer({
    storage : storage,
    fileFilter: function(req, file, callback){
        if (
            file.mimetype == "image/png" || 
            file.mimetype == "image/jpg" ||
            file.mimetype == "image/jpeg" ||
            file.mimetype == "application/pdf" ||
            file.mimetype == "video/mp4" ||
            file.mimetype == " application/msword"    ||
            file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document"  ||
            file.mimetype == "application/vnd.ms-powerpoint"   ||
            file.mimetype == " application/vnd.openxmlformats-officedocument.presentationml.presentation"  ||
            file.mimetype == "audio/mpeg"  ||  
            file.mimetype == "audio/mp3"  
            ){
            callback(null, true)
        }else{
            console.log("This file type is note supported")
            callback(null, false)
        }
    },
    limits:{
        fileSize:1024 *1024 *2     //file up to 2MB 
    }
})


module.exports = upload
