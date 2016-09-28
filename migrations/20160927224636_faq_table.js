exports.up = function(knex, Promise) {
  return knex.schema.createTable('faq', function(table){
    table.increments();
    table.string('question');
    table.string('answer');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('faq');
};
