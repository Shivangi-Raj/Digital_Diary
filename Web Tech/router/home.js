var express=require("express");
var mongoose=require("mongoose")
var router=express.Router();
var userModel=require("../model/userModel");
var contentModel=require("../model/contentModel");

router.get("/content",function(request,response){
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers");
    contentModel.find({},function(err,content){
        if(err){
            response.send("error");
        }else{
            response.send(content);
        }
    })
});
router.get("/content/:title",function(request,response){
    console.log("in home api")
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers");
    var title =request.params.title
    // console.log(t)
    // console.log(titles)
    // var title=titles.title
    // response.send(t)
    contentModel.find({title},function(err,content){
        console.log(content.length);
        if(err){
            response.send("error");
        }else if(content.length==0){
            console.log("true")
            response.send("title does not exits");
        }else{
            console.log('false')
            response.send(content);
        }
    })
});

router.get("/mood/:mood",function(request,response){
    console.log("in api")
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers");
    var mood =request.params.mood
    // console.log(t)
    // console.log(titles)
    // var title=titles.title
    // response.send(t)
    contentModel.find({mood},function(err,content){
        if(err){
            response.send("error");
        }else if(content.length==0){
            response.send("given mood is not valid");
        }else{
            response.send(content);
        }
    })
});


module.exports=router