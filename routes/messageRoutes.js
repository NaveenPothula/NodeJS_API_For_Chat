//const userController= require("./../controllers/userController");
const authController= require("./../controllers/authController");
const messageController= require("./../controllers/messageController")
const express= require("express")

const router= express.Router({mergeParams : true})

router.post("/createOrder",authController.protect,authController.restrictTo("Manufacturer"),messageController.CreateMessage)
router.get("/getSent", authController.protect,messageController.getSent)     
router.get("/getReplies", authController.protect,messageController.getReplies)
router.patch("/addPrice/:_id",authController.protect,authController.restrictTo("Transporter"),messageController.addPrice)
router.get("/getOrder/:_id",authController.protect,messageController.getMessage)
module.exports= router