var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Express", 'domain-name': 'Express', 'domain-path': 'ok' });
});

module.exports = router;
