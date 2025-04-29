var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test Title Demo', 'id': '17' });
  
});

module.exports = router;
