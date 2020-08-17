//const mysql = require('mysql');

module.exports = {

    //database connectivity 


    // db : mysql.createConnection({
    //     host :'localhost',
    //     user : 'root',
    //     password :'123',
    //     database : 'cmsdb'
    // }),
   
    
    PORT: process.env.PORT || 3000,
    globalVariables: (req, res, next) => {
        res.locals.success_message = req.flash('success-message');
        res.locals.error_message = req.flash('error-message');
        next();
    }
};
