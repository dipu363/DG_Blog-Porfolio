

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


router.route('/about')
.get(admincontroller.getcominfoabout)

router.route('/cominfo/about/aboutus')
.get(admincontroller.getaboutuspage)
.post(admincontroller.updateaboutus)
router.route('/cominfo/about/clint')
.get(admincontroller.getclintpage)
.post(admincontroller.updateclient)
router.route('/cominfo/about/teem')
.get(admincontroller.getteem)
.post(admincontroller.updateteemmembers)
router.route('/cominfo/about/product')
.get(admincontroller.getproductpage)
.post(admincontroller.updateproduct)

router.route('/cominfo/massege')
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