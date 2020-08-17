

const db = require('../models')

module.exports = {
   index: (req,res)=>{
    db.Posts.findAll().then(Posts => res.render('default/index',{Posts}));
       
    },

    loginpageget:(req,res)=>{
        res.render('default/login')
    },

    loginpost:(req,res)=>{
    res.send('Login successful')
       
    },

    registerget:(req,res)=>{
        res.render('default/register')
    },
    registerpost:(req,res)=>{
        res.send('Registration successful')

    },

    getaboutpage:(req,res)=>{

        res.render('default/about')
    },
    getcontactpage:(req,res)=>{
        res.render('default/contact')
    },
    massegepost:(req,res)=>{

        db.Masseges.create({
            name:req.body.name,
            email:req.body.email,
            massegebody:req.body.massege
          }).then(() =>
            console.log("user registration successful"),
           // req.flash('success-message','User Registration successful '),
            res.redirect('/contact'));
    }


};