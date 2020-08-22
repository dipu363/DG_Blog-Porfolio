

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
.get(admincontroller.getcominfoaboutindexpage)

router.route('/cominfo/about/aboutus')
.get(admincontroller.getaboutuspage)
.post(admincontroller.stufmassegesubmit)

router.route('/cominfo/about/smdelete/:id')
.post(admincontroller.stafmessegedelete)

router.route('/cominfo/about/client')
.post(admincontroller.creatclint)
router.route('/cominfo/about/cldelete/:id')
.post(admincontroller.clientdelete)

router.route('/cominfo/about/teem')
.post(admincontroller.updateteemmembers)

router.route('/cominfo/about/tmdelete/:id')
.post(admincontroller.temmmemberdelete)

router.route('/cominfo/about/product')
.post(admincontroller.updateproduct)

router.route('/cominfo/about/prodelete/:id')
.post(admincontroller.productdelete)


router.route('/cominfo/massege')
.get(admincontroller.getmassege)

router.route('/cominfo/about/umdelete/:id')
.post(admincontroller.massegedelete)

router.route('/users')
.get(admincontroller.getallusers)
router.route('/users/register')

.get(admincontroller.getregisterpage)
.post(admincontroller.createuser)

module.exports= router;