var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,name:'Kapilan',city:"Jaffna"});
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' ,name:'Kapilan',age:25});
});
module.exports = router;
