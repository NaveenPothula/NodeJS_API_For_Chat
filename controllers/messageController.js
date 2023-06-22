const User =   require('./../models/user');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Order=  require("./../models/order")   

exports.CreateMessage=catchAsync(async(req,res,next)=>{
   
   const new_order= await Order.create({   
    Manufacturer: req.user._id ,  
    Transporter : req.body.Transporter,
    Address: req.body.Address,
    From: req.body.From,
    To: req.body.To    
  })

    if (! new_order){
      return next(new AppError("order not created",500))
    }
  
    const sender= await User.findByIdAndUpdate(req.user._id,
      {
        $push: {sent: new_order._id}
      },
      {new: true}
      )
      if (!sender){
        return next(new AppError("user not fount",500)) 
      }

   const receiver= await User.findByIdAndUpdate(req.body.Transporter,
      {
        $push: {Messages: new_order._id}
      },
      {new: true}
      )
      if (!receiver){
        return next(new AppError("user not found",500))
         }
  res.status(200).json({
    status: 'success',  
    data: {  
      new_order
    }
  });
})  



exports.getSent=catchAsync(async(req,res,next)=>{
  const new_user = await User.findById(req.user._id).populate("sent")


  if (!new_user){
    return next(new AppError("user not found",404))
  }
  
  res.status(200).json({
    status: 'success',  
    data: {  
      sent: new_user.sent  
    }
  });

})


exports.getReplies=catchAsync(async(req,res,next)=>{
  const new_user = await User.findById(req.user._id).populate("Messages")
  
  if (!new_user){
    return next(new AppError("user not found",404))
  }
  
  
  res.status(200).json({
    status: 'success',  
    data: {  
      Messages: new_user.Messages
    }
  });
})

exports.addPrice= catchAsync(async(req,res,next)=>{

  const new_Order= await Order.findByIdAndUpdate(req.params._id,
   {Price: req.body.price},
    {new: true}
    )

    if (!new_Order){
      return next(new AppError("user not found",404))
    }
    
    const receiver=await User.findByIdAndUpdate(req.user._id,
      {
        $push: {sent: new_Order._id}
      },
      {new: true}
      )

      if (!receiver){
        return next(new AppError("user not found",404))
      }    

     const sender=await User.findByIdAndUpdate(new_Order.Manufacturer,
      {
        $push: {Messages: new_Order._id}
      },
      {new: true}
      )

      if (!sender){
        return next(new AppError("user not found",404))
      }
     
    res.status(200).json({  
      status: 'success',  
      data: {  
        new_Order
      }
    });

})

exports.getMessage =(async(req,res,next)=>{
  const newMessage = await Order.findById(req.params._id)

  if(!newMessage){
    return next(new AppError("message not found",404))
  }

  res.status(200).json({
    status: 'success',  
    data: {  
      newMessage  
    }
  });
})