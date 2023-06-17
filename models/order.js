const mongoose = require('mongoose');

const orderSchema= new mongoose.Schema({
    Order_id:{
        type: String,
        required: True
    },
    From: {
        type: mongoose.Schema.ObjectId,
        required: True  
    },
    To: {
        type: mongoose.Schema.ObjectId,
        required: True  
    },
    Address: {
        type: String,
        required: True
    },
    Price: Number,
},
{ 
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const Order = mongoose.model('Order', orderSchema);  
  
  module.exports = Order;