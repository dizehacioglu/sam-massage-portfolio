
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('services').insert({id: 1, name: 'rowValue1', description: 'description', duration: '60 min', price: '$60'}),
        knex('services').insert({id: 2, name: 'rowValue2', description: 'description', duration: '60 min', price: '$60'}),
        knex('services').insert({id: 3, name: 'rowValue3', description: 'description', duration: '60 min', price: '$60'})
      ]);
    });
};
