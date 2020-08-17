

const express = require('express');
const router = express.Router();

const admincontroller =require('../controllers/adminController');


router.all('/*',(req,res,next)=>{
    req.app.locals.layout = 'admin';
    next();
})

router.route('/')
.get( admincontroller.index);

router.route('/posts')
.get(admincontroller.getposts);


router.route('/posts/create')
.get(admincontroller.createpost)
.post(admincontroller.submitpost);

router.route('/posts/edit/:id')
.get(admincontroller.getpostbyid)
.post(admincontroller.updatepost)
router.route('/posts/delete/:id')
.post(admincontroller.deletepost)


router.route('/cominfo/about')
.get(admincontroller.getcominfoabout)
.post(admincontroller.postcominfoabout)

router.route('/cominfo/contact')
.get(admincontroller.getmassege)
.post(admincontroller.postcominfocontact)

router.route('/cominfo/delete/:id')
.post(admincontroller.massegedelete)

router.route('/users')
.get(admincontroller.getallusers)
router.route('/users/register')
.get(admincontroller.getregisterpage)
.post(admincontroller.createuser)

router.route('/test')
.get(admincontroller.gettodo)
.post(admincontroller.todopost)



module.exports= router;