

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

    getaboutpage:async(req,res)=>{

        // note:
            // async method use for fatching data from multiple table
            // render this data to one url by hiting useing awit method;

        const StufMassege = await db.StufMassege.findAll();
        const Client = await db.Client.findAll();
        const TeemMembers = await db.TeemMembers.findAll();
        const Products = await db.Products.findAll();




       // res.send({stufmessege:stufmessege,client:client})
       res.render('default/about',{
           StufMassege:StufMassege,
           Client:Client,
           TeemMembers:TeemMembers,
           Products:Products
        })

       
    },


    getaboutsinglestaff: async(req,res)=>{

        const StufMassege = await db.StufMassege.findAll();
        const Client = await db.Client.findAll();
        const TeemMembers = await db.TeemMembers.findAll();
        const Products = await db.Products.findAll();
       const StufMassege1 = await db.StufMassege.findAll({
           where:{
               id:req.params.id
           }
       });

          res.render('default/about',
          {
            StufMassege:StufMassege,
            Client:Client,
            TeemMembers:TeemMembers,
            Products:Products,
            StufMassege1:StufMassege1,

           
          } )
          console.log('result',{StufMassege1})





         // db.Posts.findAll().then(Posts => res.render('admin/posts/index',{Posts}));
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