
exports.up = function(knex, Promise) {
  return knex.schema.createTable('services', function(table){
    table.increments();
    table.string('name');
    table.string('description');
    table.string('duration');
    table.string('price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('services');
};
