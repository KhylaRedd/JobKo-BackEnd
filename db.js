// database.js

const { Pool } = require('pg'); // Import the pg library
require('dotenv').config(); // Import dotenv to use environment variables

// Create a pool to manage database connections
const pool = new Pool({
  user: process.env.DB_USER,    // Your database username
  host: process.env.DB_HOST,    // Usually localhost
  database: process.env.DB_NAME, // Name of your database
  password: process.env.DB_PASS, // Your database password
  port: 5432,                    // Default PostgreSQL port
});

// Connect to the database to check if the connection works
pool.connect()
  .then(() => console.log('Connected to the database successfully'))
  .catch(err => console.error('Error connecting to the database:', err));

// Export the pool object for use in other files (e.g., controllers, models)
module.exports = pool;
