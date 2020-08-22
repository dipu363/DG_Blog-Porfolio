
const {globalVariables} = require('./config/configuration');

const express = require('express');
const path = require('path');
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const hbs = require('express-handlebars')
const {PORT} = require('./config/configuration');
const {selectOption} = require('./config/customFunctions');

const db = require("./models");
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
// this package require for upload image 
const fileupload = require('express-fileupload');

const app = express();



// // DB  Connection
// const db = mysql.createConnection({

//     host :'localhost',
//     user : 'root',
//     password :'123',
//     database : 'cmsdb'
// })
// db.connect((err) =>{
// if(err){
//     throw err;
// }
// console.log("MySql Connected...")

// });





/* Configure express*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

/*  Flash and Session*/
app.use(session({
    secret: 'anysecret',
    saveUninitialized: true,
    resave: true
}));

//flash for display massages 
app.use(flash());


/* Use Global Variables */
app.use(globalVariables);
//use file uploade
app.use(fileupload());


/* Passport Initialize */
app.use(passport.initialize());
app.use(passport.session());



/* Setup View Engine To Use Handlebars */
app.engine('handlebars', hbs({
  
  
  defaultLayout: 'default',
  helpers: {select: selectOption},
  handlebars: allowInsecurePrototypeAccess(Handlebars)


}));
app.set('view engine' , 'handlebars');

    




/* Routes */
const defaultRoutes = require('./routes/defaultRoutes');
const adminRoutes = require('./routes/adminRoutes');
const fileUpload = require('express-fileupload');


app.use('/', defaultRoutes);
app.use('/admin', adminRoutes);





/* Start The Server */
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`listening on: http://localhost:${PORT}`);
    });
  });

