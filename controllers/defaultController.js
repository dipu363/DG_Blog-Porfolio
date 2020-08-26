const db = require('../models')

module.exports = {
    index: async (req, res) => {
        const Posts = await db.Posts.findAll();
        const ContactInfo = await db.ContactInfo.findAll();

        res.render('default/index', {
            Posts: Posts,
            ContactInfo: ContactInfo,
        })

    },

    loginpageget: (req, res) => {
        res.render('default/login')
    },

    loginpost: (req, res) => {
        res.send('Login successful')

    },

    registerget: (req, res) => {

        res.render('default/register')
    },
    registerpost: (req, res) => {
        res.send('Registration successful')

    },

    getaboutpage: async (req, res) => {

        // note:
        // async method use for fatching data from multiple table
        // render this data to one url by hiting useing awit method;

        const StufMassege = await db.StufMassege.findAll();
        const Client = await db.Client.findAll();
        const TeemMembers = await db.TeemMembers.findAll();
        const Products = await db.Products.findAll();
        const ContactInfo = await db.ContactInfo.findAll();
        // res.send({stufmessege:stufmessege,client:client})
        res.render('default/about', {
            StufMassege: StufMassege,
            Client: Client,
            TeemMembers: TeemMembers,
            Products: Products,
            ContactInfo: ContactInfo,
        })


    },

    getaboutsinglestaff: async (req, res) => {

        const StufMassege = await db.StufMassege.findAll();
        const Client = await db.Client.findAll();
        const TeemMembers = await db.TeemMembers.findAll();
        const Products = await db.Products.findAll();
        const ContactInfo = await db.ContactInfo.findAll();
        const StufMassege1 = await db.StufMassege.findAll({
            where: {
                id: req.params.id
            }
        });

        res.render('default/about', {
            StufMassege: StufMassege,
            Client: Client,
            TeemMembers: TeemMembers,
            Products: Products,
            StufMassege1: StufMassege1,
            ContactInfo: ContactInfo,


        })
        console.log('result', {
            StufMassege1
        })

    },

    getcontactpage: async (req, res) => {

        const ContactInfo = await db.ContactInfo.findAll();

        res.render('default/contact', {

            ContactInfo: ContactInfo,
        })
    },


    getnavigationpage: async (req, res) => {

        const contactInfo = await db.ContactInfo.findAll();

        res.render('partials/default/top-navigation', {

            ContactInfo: contactInfo,
        })
    },
    getfooterpage: async (req, res) => {

        const contactInfo = await db.ContactInfo.findAll();

        res.render('partials/default/footer', {

            ContactInfo: contactInfo,
        })
    },


    massegepost: (req, res) => {

        db.Masseges.create({
            name: req.body.name,
            email: req.body.email,
            massegebody: req.body.massege
        }).then(() =>
            console.log("user registration successful"),
            // req.flash('success-message','User Registration successful '),
            res.redirect('/contact'));
    }


};