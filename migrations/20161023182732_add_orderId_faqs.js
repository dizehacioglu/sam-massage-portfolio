
exports.up = function(knex, Promise) {
  return knex.schema.table('faq', function(table){
    table.integer('orderId');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('faq', function(table){
    table.integer('orderId');
  })
};
