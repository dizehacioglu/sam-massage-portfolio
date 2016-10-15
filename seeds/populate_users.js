require('dotenv').config();
var bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'samantha', password: bcrypt.hashSync(process.env.PASSWORD, 8)}),
        knex('users').insert({username: 'dize', password: bcrypt.hashSync(process.env.PASSWORD, 8)}),
      ]);
    });
};
