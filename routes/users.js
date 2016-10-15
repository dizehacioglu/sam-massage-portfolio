var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/sam-massage'
  });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next){
  res.render('login')
})

router.post('/login', function(req, res, next){
  knex('users').where('username', req.body.username).then(function(user){
    if(user.length > 0){
      if(bcrypt.compareSync(req.body.password, user[0].password)){
        req.session.user = user;
        res.redirect('/');
      } else {
        res.render('login', {error: 'Password doesn\'t match'});
      }
    } else {
      res.render('login', {error: 'User doesn\'t exist'});
    }
  })
})

module.exports = router;
