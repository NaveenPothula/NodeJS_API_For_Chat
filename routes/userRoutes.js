const userController= require("./../controllers/userController");
const authController= require("./../controllers/authController");
const express= require("express")

const router= express.Router()

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get("/getall",userController.getAllUsers)

router.get('/me', authController.protect,userController.getMe );
router.get("/:_id",userController.getUser)

module.exports= router;       