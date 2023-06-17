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



  
  
  // const test= new tour({
  //   name: "naveen  ",  
  //   rating: 4
  // })

  // const bd= new tour({
  //   name: "naveen  ",  
  //   rating: 4
  // })


  

//test.save().then((doc)=>console.log(doc)).catch((err)=> console.err)
//bd.save().then((doc)=>console.log(doc)).catch((err)=> console.err)

const port= process.env.port;  
console.log(port)

app.listen(port,()=>{console.log("oops")});                              

