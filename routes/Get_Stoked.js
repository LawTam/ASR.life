var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Get_Stoked', { title: 'Get Stoked' });
});

module.exports = router;
