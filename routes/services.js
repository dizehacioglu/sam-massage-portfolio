var express = require('express');
var router = express.Router();

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/sam-massage'
  });

router.get('/', function(req, res, next){
  res.send('services');
})

module.exports = router;
