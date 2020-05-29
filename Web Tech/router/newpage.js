var express=require("express");
var mongoose=require("mongoose")
var router=express.Router();
var userModel=require("../model/userModel");
var contentModel=require("../model/contentModel");
var multer=require("multer");


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/");

    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const upload=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*5
    }
});



router.post("/content",upload.single("image"),function(request,response){
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers");
    console.log(request.body);
    // console.log(request.body.title);
    // console.log(request.body.flag)
    var content= new contentModel({
        // _id:new mongoose.Types.ObjectId(),
        title:request.body.title,
        details:request.body.details,
        mood:request.body.mood,
        image:request.body.image
    });
    // console.log(content.image)
    content.save()
    .then(item =>{
        response.send("item stored in database").status(201);
        // console.log(item);
    })
    .catch(err =>{
        response.send("title should be unique").sendStatus(400);
    })

})

module.exports=router
