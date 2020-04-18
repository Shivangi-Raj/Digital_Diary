var express=require("express");
var mongoose=require("mongoose")
var router=express.Router();
var userModel=require("../model/userModel");

router.get("/user",function(request,response){
    userModel.find({},function(err,user){
        if(err){
            response.send("error");
        }else{
            response.send(user);
        }
    })
})

router.post("/user",function(request,response){
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers");
// console.log()
    // var user=request.body;
    var username=request.body.username;
    var password=request.body.password;
    console.log(username);
    console.log(password)

    userModel.find({username},function(err,users){
        if(err){
            response.send("error");
        }else{
            if(users[0].password==password){
                response.send("correct");

            }else{
                response.send("incorrect");
            }
        }

    });
});

module.exports=router;