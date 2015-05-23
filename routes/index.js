var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('piopio', { title: 'Real Time Tweets' });
});

module.exports = router;
