// database.js

const pgp = require('pg-promise')();  // PostgreSQL promise library

require('dotenv').config(); // Import dotenv to use environment variables

const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});


module.exports = db;
