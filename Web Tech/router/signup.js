var express=require("express");
var mongoose=require("mongoose")
var router=express.Router();
var userModel=require("../model/userModel");



router.post("/user",function(request,response){
    // console.log("2");
    // response.send("good");
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers");

    var user=new userModel(request.body);
    if(!user || user.username==""||user.password==""||user.email==""){
        response.send({error:"All fields are required"})
    }else{
    user.save()
    .then(item =>{
        response.send("item saved to database");
    })
    .catch(err =>{
        response.send("unable to save item to database");
    })
}
    // response.send("ok")
});

module.exports=router;