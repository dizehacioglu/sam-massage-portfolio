var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/sam-massage'
  });

router.get('/', function(req, res, next){
  knex('services').then(function(data){
    console.log(data);
    res.render('services/all', {services:data});
  })
})

router.get('/new', function(req, res, next){
  res.render('services/new');
})

router.post('/new', function(req, res, next){
  knex('services').insert(req.body).then(function(){
    res.redirect('/admin/services')
  })
})

router.get('/:id/edit', function(req, res, next){
  knex('services').where('id', req.params.id).then(function(data){
    res.render('services/edit', {service:data[0]});
  })
})

router.post('/:id/edit', function(req, res, next){
  knex('services').where('id', req.params.id).update(req.body).then(function(data){
    console.log(data);
    res.redirect('/admin/services');
  })
})

router.get('/:id/delete', function(req, res, next){
  knex('services').where('id', req.params.id).del().then(function(){
    res.redirect('/admin/services');
  })
})

module.exports = router;
