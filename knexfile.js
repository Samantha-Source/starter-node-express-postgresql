const path = require("path");
require ("dotenv").config();
const { DATABSE_URL } = process.env;

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
module.exports = {

  development: {
    client: 'postgresql',
    connection: DATABSE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
  },
};
