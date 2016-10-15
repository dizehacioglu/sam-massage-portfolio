var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/sam-massage'
  });

router.get('/', function(req, res, next){
  knex('faq').then(function(data){
    console.log(data);
    res.render('faq/all', {faqs:data});
  })
})

router.get('/new', function(req, res, next){
  res.render('faq/new');
})

router.post('/new', function(req, res, next){
  knex('faq').insert(req.body).then(function(){
    res.redirect('/admin/faqs')
  })
})

router.get('/:id/edit', function(req, res, next){
  knex('faq').where('id', req.params.id).then(function(data){
    res.render('faq/edit', {faq:data[0]});
  })
})

router.post('/:id/edit', function(req, res, next){
  knex('faq').where('id', req.params.id).update(req.body).then(function(data){
    console.log(data);
    res.redirect('/admin/faqs');
  })
})

router.get('/:id/delete', function(req, res, next){
  knex('faq').where('id', req.params.id).del().then(function(){
    res.redirect('/admin/faqs');
  })
})

module.exports = router;
