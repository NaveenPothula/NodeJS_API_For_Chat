const express= require("express");
//const {createProxyMiddleware} = require("http-proxy-middleware")
const app=express();
//const cors = require("cors")  
//const cookieParser= require("cookie-parser")

//app.use(cookieParser());  
//app.use(cors(corsOPtions))  
//const corsOptions= {
  // origin: true,
   //credentials: true
//}
//app.use(cors(corsOptions))

//const tourRouter= require("./routes/tourRoutes");
const  userRouter= require("./routes/userRoutes");
//const errorHandler= require("./modelHandlers/errorController");
//const errorController = require("./modelHandlers/errorController");
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
//const userRouter= require("./routes/userRoutes")  
app.use(express.json());  

 
//app.use("/api/v1/tour",tourRouter);
app.use("/api/v1/user",userRouter);   

app.all('*', (req, res, next) => {
   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
 });
 

 app.use(globalErrorHandler);

 module.exports =app;
