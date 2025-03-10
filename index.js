require('dotenv').config();  // Load the environment variables from .env
const express = require('express');
const pgp = require('pg-promise')();  // PostgreSQL promise library
const app = express();
const port = process.env.PORT || 5000; // Default to 5000 if no port is specified
const cors = require('cors')

// Database connection using pg-promise and environment variables
const db = pgp({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
});

app.use(express.json())
app.use(cors())

// Test route to check if the database is connected
app.get('/', (req, res) => {
  res.send('Hello, Welcome to JobKo!');
});

// A simple route to query the database and return all users (example)
app.get('/users', async (req, res) => {
  try {
    const users = await db.any('SELECT * FROM users');
    console.log
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
