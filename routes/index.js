require('dotenv').config();
var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

var knex = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/sam-massage'
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Luce Leaf Massage' });
});

router.get('/services', function(req, res, next){
  knex('services').orderBy('orderId', 'asc').then(function(data){
    res.render('services', {services: data});
  })
})

router.get('/faq', function(req, res, next){
  knex('faq').orderBy('orderId', 'asc').then(function(data){
    res.render('faq', {qas: data});
  })
})

router.get('/contact', function(req, res, next){
  res.render('contact');
})

router.post('/contact', function(req, res, next){
  var transporter = nodemailer.createTransport(process.env.SMTP);
  var mailData = {
    from: req.body.fromEmail,
    to: 'samanthabluce@gmail.com',
    // to: 'dize.hacioglu@gmail.com',
    subject: req.body.reason,
    text: req.body.message
  };

  transporter.sendMail(mailData, function(err, info){
    if (err){
      res.render('contact', {error: 'Something went wrong. You can contact me at samanthabluce@gmail.com.'})
    }
    res.render('contact');
  })
})

module.exports = router;
