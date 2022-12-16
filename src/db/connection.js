// which DB are we connecting to
const env = process.env.NODE_ENV || "development";

//getting the config at the key [env]
const config = require("../../knexfile")[env];

// calling knex handing config to make db connection
const knex = require("knex")(config);

module.exports = knex;