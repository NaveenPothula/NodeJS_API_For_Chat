const User = require('./../models/user');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Order= require("./../models/order")  



exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find({role: "Transporter"});
  
    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users
      }
    });
  });

  exports.getMe = catchAsync(async (req, res, next) => {  
    const newuser= await User.findById(req.user._id);  

    if(!newuser){
        return next(new AppError("no user Found  ",404))    
    }
    //console.log(newTour);      

    res.status(201).json({
        status: "success",  
        data: newuser

    })

  }); 

  exports.getUser = catchAsync(async (req, res, next) => {
    const newuser= await User.findById(req.params._id);  

    if(!newuser){
        return next(new AppError("no user Found  ",404))    
    }
    //console.log(newTour);      

    res.status(201).json({
        status: "success",  
        data: newuser

    })

  }); 

  exports.deleteALL = catchAsync(async (req, res, next) => {  
     await User.remove({});  
     await Order.remove({});  

      

    res.status(201).json({
        status: "success",  
  

    })

  }); 
