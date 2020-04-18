const mongoose=require("mongoose");
const uri="mongodb+srv://sulabh_shanu:sulabh_shanu@cluster0-qdryw.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async() =>{
   await mongoose.connect(uri,{ 
       useUnifiedTopology: true,
       useNewUrlParser: true
     });
   console.log("database connected");
}

module.exports=connectDB;