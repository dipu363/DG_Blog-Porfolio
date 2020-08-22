
const db = require('../models')
const {isEmpty} = require('../config/customFunctions');

module.exports = {
        index: (req,res)=>{
            res.render('admin/index')
        },
        // all post methed start heare
        getposts: (req,res)=>{

            db.Posts.findAll().then(Posts => res.render('admin/posts/index',{Posts}));

            //  db.Posts.findAll().then(posts => {
            //  res.render('admin/posts/index',{posts:posts})
            //         });
        },
        createpost:(req,res)=>{
            res.render('admin/posts/create')
        },
        submitpost:(req,res)=>{

            let filename = '';

            if (!isEmpty(req.files)) {
                let file = req.files.uploadedFile;
                filename = file.name;
                let uploadDir = './public/uploads/';
    
                file.mv(uploadDir + filename, (err) => {
                    if (err)
                        throw err;
                });
            }

            try {
                db.Posts.create({
                    title:req.body.title,
                    description:req.body.description,
                    file: `/uploads/${filename}`,

                  }).then(savepost =>
                    console.log("Post submited successful"),
                    req.flash('success-message','Your New Post submit successful '),
                    res.redirect('/admin/posts'));

                  

            } catch (error) {
                console.log(error);
            } 

        },
        getpostbyid:(req,res) =>{

            db.Posts.findAll({
                where: {
                  id: req.params.id
                }
              }).then(Posts => res.render('admin/posts/edit',{Posts:Posts}));
             // db.Posts.findAll().then(Posts => res.render('admin/posts/index',{Posts}));


        },
        updatepost:(req,res)=>{

            let filename = '';

            if (!isEmpty(req.files)) {
                let file = req.files.uploadedFile;
                filename = file.name;
                let uploadDir = './public/uploads/';
    
                file.mv(uploadDir + filename, (err) => {
                    if (err)
                        throw err;
                });
            }

            db.Posts.update(
                {
                    title:req.body.title,
                    description:req.body.description,
                    file: `/uploads/${filename}`,
                },
                {
                  where: { id: req.params.id }
                }
              ).then(() =>
              
              console.log("Post update successful"),
                    req.flash('success-message','Your Post Update successful '),
                    res.redirect('/admin/posts'));
              
             


        },
        deletepost:(req,res)=>{

            db.Posts.destroy({
                where: {
                  id: req.params.id
                }
              }).then(() => 
              console.log("Post delete successful"),
                    req.flash('success-message',' successfully deleted your post'),
                    res.redirect('/admin/posts'));
            
        },
        //all company information method for aboutus start heare
        getcominfoaboutindexpage:async(req,res)=>{

            // note:
            // async method use for fatching data from multiple table
            // render this data to one url by hiting useing awit method;


            const StufMassege = await db.StufMassege.findAll();
            const Client = await db.Client.findAll();
            const UsersMessege = await db.Masseges.findAll();
            const TeemMembers = await db.TeemMembers.findAll();
            const Products = await db.Products.findAll();


           // res.send({stufmessege:stufmessege,client:client})
           res.render('admin/about/index',{
               StufMassege:StufMassege,
               Client:Client,
               UsersMessege:UsersMessege,
               TeemMembers:TeemMembers,
               Products:Products
            })
        

        },
        getaboutuspage:(req,res)=>{
            res.render('admin/about/aboutus');
         },
        stufmassegesubmit:(req,res) =>{
             let filename = '';
     
             if (!isEmpty(req.files)) {
                 let file = req.files.uploadedFile;
                 filename = file.name;
                 let uploadDir = './public/uploads/';
     
                 file.mv(uploadDir + filename, (err) => {
                     if (err)
                         throw err;
                 });
             }
     
             try {
                 db.StufMassege.create({
                     name:req.body.name,
                     designation:req.body.designation,
                     massege:req.body.massege,
                     file: `/uploads/${filename}`,
     
                   }).then(savemassege =>
                     req.flash('success-message','Your Messege submit successful '),
                     res.redirect('/admin/about'));
     
                   
     
             } catch (error) {
                 console.log(error);
             } 
         },
        stafmessegedelete:(req,res)=>{
            db.StufMassege.destroy({
                where: {
                  id: req.params.id
                 
                }
              }).then(() => 
              console.log("Post delete successful"),
                    req.flash('success-message',' successfully deleted Staff Messege'),
                    res.redirect('/admin/about'));
        },
        // about page our clint  all method start in here
        creatclint:(req,res) =>{
            let filename = '';
     
            if (!isEmpty(req.files)) {
                let file = req.files.uploadedFile;
                filename = file.name;
                let uploadDir = './public/uploads/';
    
                file.mv(uploadDir + filename, (err) => {
                    if (err)
                        throw err;
                });
            }
    
            try {
                db.Client.create({
                    name:req.body.name,
                    url:req.body.url,
                    file: `/uploads/${filename}`,
    
                  }).then(clint =>
                    req.flash('success-message','successful client Created '),
                    res.redirect('/admin/about'));
    
                  
    
            } catch (error) {
                console.log(error);
            } 

        },

        clientdelete:(req,res) =>{
            db.Client.destroy(
                {
                    where:{
                        id : req.params.id
                    }
                }
            ).then(()=>

        console.log('client is deleted'),
        
        req.flash('success-message',' successfully deleted your client'),
        res.redirect('/admin/about'));
            
            
          


        },
        // about page our teem member all method start in here
        updateteemmembers:(req,res) =>{
            let filename = '';
     
            if (!isEmpty(req.files)) {
                let file = req.files.uploadedFile;
                filename = file.name;
                let uploadDir = './public/uploads/';
    
                file.mv(uploadDir + filename, (err) => {
                    if (err)
                        throw err;
                });
            }
    
            try {
                db.TeemMembers.create({
                    name:req.body.name,
                    designation:req.body.designation,
                    description:req.body.description,
                    file: `/uploads/${filename}`,
    
                  }).then(TeemMembers =>
                    req.flash('success-message','Your Messege submit successful '),
                    res.redirect('/admin/about'));
    
                  
    
            } catch (error) {
                console.log(error);
            } 

        },

        temmmemberdelete:(req,res)=>{

            db.TeemMembers.destroy(
                {
                    where:{
                        id:req.params.id
                    }
                }
            ).then(
                console.log('client is deleted'),
                req.flash('success-message',' successfully deleted your client'),
                res.redirect('/admin/about')
            );
        },
        //about page our product all needed method start in here
        updateproduct:(req,res) =>{
            let filename1 = '';
            let filename2 = '';
            let filename3 = '';
     
            if (!isEmpty(req.files)) {
                let file1 = req.files.uploadedFile1;
                let file2 = req.files.uploadedFile2;
                let file3 = req.files.uploadedFile3;

                filename1 = file1.name;
                filename2 = file2.name;
                filename3 = file3.name;
                let uploadDir = './public/uploads/';
    
                file1.mv(uploadDir + filename1, (err) => {
                    if (err)
                        throw err;
                });
                file2.mv(uploadDir + filename2, (err) => {
                    if (err)
                        throw err;
                });
                file3.mv(uploadDir + filename3, (err) => {
                    if (err)
                        throw err;
                });
            }
    
            try {
                db.Products.create({
                    proTitle:req.body.proTitle,
                    description:req.body.description,
                    file1: `/uploads/${filename1}`,
                    file2: `/uploads/${filename2}`,
                    file3: `/uploads/${filename3}`,
    
                  }).then(Products =>
                    req.flash('success-message','successful client Created '),
                    res.redirect('/admin/about'));
    
                  
    
            } catch (error) {
                console.log(error);
            } 

        },  
        
        productdelete:(req,res)=>{
            db.Products.destroy({
                where:{

                    id:req.params.id
                }
            }
            ).then(
                console.log('product is deleted'),
                req.flash('success-message',' successfully deleted a product'),
                res.redirect('/admin/about')
            );

        },

                
        
        //  user registration all needed method strat in heare
        getallusers:(req,res)=>{
           
            db.Users.findAll().then(Users => res.render('admin/users/index',{Users}));
         },
         getregisterpage:(req,res)=>{
             res.render( 'admin/users/register')
         },
         createuser:(req,res)=>{
                 try {
                     db.Users.findOne({email:req.body.email}).then(user =>{
 
                         if(Users){
                             req.flash('success-message',' successfully deleted massege');
                             res.redirect('/default/login');
                         }
 
                         else{
                             db.Users.create({
                                 firstName:req.body.firstname,
                                 lastName:req.body.lastname,
                                 email:req.body.email,
                                 password:req.body.password,
                                 userstatus:"Active"
                               }).then(Users =>
                                 console.log("user registration successful"),
                                 req.flash('success-message','User Registration successful '),
                                 res.redirect('/admin/users'));
                         }
                     })
 
 
                     db.Users.create({
                         firstName:req.body.firstname,
                         lastName:req.body.lastname,
                         email:req.body.email,
                         password:req.body.password,
                         userstatus:"Active"
                       }).then(Users =>
                         console.log("user registration successful"),
                         req.flash('success-message','User Registration successful '),
                         res.redirect('/admin/users'));
                 
                 } catch (error) {
                     console.log(error);
                 }
 
            
            
         },
        loginpost:(req,res)=>{
            res.redirect('/admin')
        },
        //all recived messege from users with the contact form in the contact page
        // all method start here

        getmassege:(req,res)=>{

            db.Masseges.findAll().then(Masseges => res.render('admin/contact/index',{Masseges}));
            //res.render('admin/contact/index')
        },
        massegedelete:(req,res)=>{

            db.Masseges.destroy({
                where: {
                  id: req.params.id
                }
              }).then(() => 
              console.log("massege delete successful"),
                    req.flash('success-message',' successfully deleted massege'),
                    res.redirect('/admin/about'));

        },

};

