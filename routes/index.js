var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Samantha Luce' });
});

router.get('/services', function(req, res, next){
  res.render('services');
})

router.get('/faq', function(req, res, next){
  res.render('faq');
})

router.get('/contact', function(req, res, next){
  res.render('contact');
})



module.exports = router;
