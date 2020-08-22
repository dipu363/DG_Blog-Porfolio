
const express = require("express");
const router = express.Router();

const defaultController =require('../controllers/defaultController')
const admincontroller =require('../controllers/admincontroller')

const db = require('../models')

router.all('/*',(req,res,next)=>{
    req.app.locals.layout = 'default';
    next();
})

router.route('/')


.get( defaultController.index)

router.route('/login')
.get(defaultController.loginpageget)
.post(admincontroller.loginpost)

router.route('/register')
.get(defaultController.registerget)
.post(defaultController.registerpost)

router.route('/about')
.get(defaultController.getaboutpage)

router.route('/about/staff/:id')
.get(defaultController.getaboutsinglestaff)



router.route('/contact')
.get(defaultController.getcontactpage)
.post(defaultController.massegepost)


module.exports= router;