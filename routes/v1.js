const express=require("express");
const router=express.Router();
const {getWelcomeMessage}=require("../controllers/v1")

router.route('/').get(getWelcomeMessage)

module.exports=router;