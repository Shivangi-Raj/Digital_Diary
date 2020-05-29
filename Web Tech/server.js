var express= require("express");
var mongoose=require("mongoose")
var app=express();
var parser=require("body-parser");
// const path=require('path');
// const crypto=require('crypto');
// const multer=require('multer');
// const gridFsStorage=require('multer-gridfs-storage');
// const grid=require('gridfs-stream');
// const methodOvveride=require('method-override');
const db = require("./DB/connection.js");

var signup=require("./router/signup");
var login=require("./router/login");
var home=require("./router/home")
var newpage=require("./router/newpage")
const Cors=require("cors");
// var db=mongoose.connect("mongodb://localhost/diary")

app.use(Cors())
// app.use('/uploads',express.static('uploads'));

// app.set('veiw engine','ejs');
// app.use(methodOvveride('_method'))
app.use(parser.json({limit:'50mb'}));
app.use(parser.urlencoded({limit:"50 mb",extended:true}))
app.use("/signup",signup);
app.use("/login",login);
app.use("/home",home);
app.use("/newpage",newpage);
app.use("/uploads",express.static('./uploads'));
// let gfs;
// conn.open('open', () => {
    // initializing stream
    // gfs=grid(conn.db,mongoose.mongo);
    // gfs.collection('uploads')
// })

//creating storage engine
// const storage=new gridFsStorage({
//     url:'mongodb://localhost/diary',
//     file: (req,file) =>{
//         return new Promise((resolve,reject) => {
//             crypto.randomBytes(16,(err,buf)=>{
//                 if(err){
//                     return reject(err);
//                 }
//                 const filename =buf.toString('hex') + path.extname(file.originalname);
//                 const fileInfo={
//                     filename:filename,
//                     bucketName: 'uploads'
//                 };
//                 resolve(fileInfo);
//             });
//         });
//     }
// });
// const upload=multer({storage})

app.get("/",function(request,response){

    response.send("hello");
});

// app.post('/uploads',upload.single('image'), (request,response) => {
//     response.json({file:request.file});

// })

db()
.then(() => {
    app.listen(3001,function(){
        console.log("running on port 3001");
    })
})
