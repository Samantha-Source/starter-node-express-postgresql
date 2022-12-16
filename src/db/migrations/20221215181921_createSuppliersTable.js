
// export function up which takes in the knex connection
exports.up = function (knex) {
  //create table called "suppliers"
  //create table takes in 2 paramertes, what you want to call the table and function(all the things you want about that table)
  return knex.schema.createTable("suppliers", (table) => {
    table.increments("supplier_id").primary();
    table.string("supplier_name");
    table.string("supplier_address_line_1");
    table.string("supplier_address_line_2");
    table.string("supplier_city");
    table.string("supplier_state");
    table.string("supplier_zip");
    table.string("supplier_phone");
    table.string("supplier_email");
    table.text("supplier_notes");
    table.string("supplier_type_of_goods");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("suppliers");
};