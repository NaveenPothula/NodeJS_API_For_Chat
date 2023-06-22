const mongoose = require('mongoose');
const User= require("./../models/user")

const orderSchema= new mongoose.Schema({
    Manufacturer: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    Transporter:{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    Price: Number,
    Address: {
        type: String,
        required: true
    } ,
    From:{
        type: String,
        required: true
    },
    To: { 
        type: String,
        required: true
    }
},
{ 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }  
})



orderSchema.pre(/^find/, function(next) {
    this.populate({
      path: 'Manufacturer',
     select: 'name email'
    }).populate({
           path: 'Transporter',
        select: 'name email'
     });
    next();
  }); 
  
    const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;  

  