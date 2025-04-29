var express = require('express');
var router = express.Router();

var adminController = require('../controllers/adminController');

/* GET admin home page. */
router.get('/', adminController.homePage);

/* GET admin add directory*/
router.get('/add', adminController.addPage);

module.exports = router;
