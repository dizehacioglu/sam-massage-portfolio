var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/sam-massage'
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Samantha Luce' });
});

router.get('/services', function(req, res, next){
  res.render('services');
})

router.get('/faq', function(req, res, next){
  knex('faq').then(function(data){
    res.render('faq', {qas: data});
  })
})

router.get('/contact', function(req, res, next){
  res.render('contact');
})



module.exports = router;
