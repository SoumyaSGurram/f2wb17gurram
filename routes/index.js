var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("added bootstrap for bur=tton in index.pug file")
  res.render('index', { title: 'Express' });
});

module.exports = router;
