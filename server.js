const app= require("./app");
const mongoose=require("mongoose"); 
 
const dotenv = require("dotenv");
dotenv.config({path: "./process.env"});  

const db = process.env.databasepassword.replace("<password>",process.env.database);   

mongoose.connect(db,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true  
}).then(()=>console.log("db connection successful"));                        



  
  
  

const port= process.env.port;  
console.log(port)

app.listen(port,()=>{console.log("oops")});                              

