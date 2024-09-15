const express = require("express");
const router = express.Router()
const controllers = require("../controllers/user");


router.get("/", controllers.homePage );
router.get("/about", controllers.aboutPage);
router.get("/contact", controllers.contactPage);