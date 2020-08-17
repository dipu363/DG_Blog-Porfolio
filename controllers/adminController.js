
const db = require('../models')
const {isEmpty} = require('../config/customFunctions');

module.exports = {
     index: (req,res)=>{
            res.render('admin/index')
        },
        getposts: (req,res)=>{

            db.Posts.findAll().then(Posts => res.render('admin/posts/index',{Posts}));

            //  db.Posts.findAll().then(posts => {
            //  res.render('admin/posts/index',{posts:posts})
            //         });
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

        createpost:(req,res)=>{
            res.render('admin/posts/create')
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


        getcominfoabout:(req,res)=>{
            
            res.render('admin/about/index')
        },
        postcominfoabout:(req,res)=>{
            res.send('you are in about page')
           
        },
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
                    res.redirect('/admin/cominfo/contact'));

           

        },
        postcominfocontact:(req,res)=>{
            res.send('you are in contact  page')
          //  res.render('admin/about/contact')
        },
        getallusers:(req,res)=>{
           
           db.Users.findAll().then(Users => res.render('admin/users/index',{Users}));
        },
        getregisterpage:(req,res)=>{
            res.render( 'admin/users/register')
        },
        createuser:(req,res)=>{


            // let errors= [];
            // if(req.body.password !== req.body.passwordConfirm){
            //     errors.push({massege: 'password do not mach'});
                
            // }
            // if(errors.length>0){
            //     res.render('andmin/users/register' )
            

            // }
            
            
            
            
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
        gettodo:(req,res)=>{
                db.Todo.findAll().then(todos => res.send(todos));
             
        },

        todopost:(req,res)=>{
            
            try {
                db.Todo.create({
                    text: req.body.text
                  }).then(submitedTodo => res.send(submitedTodo));
                


            } catch (error) {
                console.log(error);
            }
            
    },


    loginpost:(req,res)=>{
        res.redirect('/admin')
    }

};

