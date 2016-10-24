
exports.up = function(knex, Promise) {
  return knex.schema.table('services', function(table){
    table.integer('orderId');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('services', function(table){
    table.dropColumns('orderId');
  })
};
