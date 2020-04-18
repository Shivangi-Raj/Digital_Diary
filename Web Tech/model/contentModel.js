var mongoose=require("mongoose");
const fs=require("fs");
var Schema=mongoose.Schema;
var ObjectId=mongoose.Schema.Types.ObjectId;

var contentModel = new Schema({
    user:[{type:ObjectId,ref:'UserModel'}],
    title:{type:String,required:true,unique:true},
    image:{type:String,required:true},
    details:{type:String, required:true},
    mood:{type:String,default:"happy"},
    
})
module.exports=mongoose.model('ContentModel',contentModel);