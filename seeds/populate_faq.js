
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('faq').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('faq').insert({id: 1, question: 'rowValue1', answer: 'answer1'}),
        knex('faq').insert({id: 2, question: 'rowValue2', answer: 'answer2'}),
        knex('faq').insert({id: 3, question: 'rowValue3', answer: 'answer3'})
      ]);
    });
};
