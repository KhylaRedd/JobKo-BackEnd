require('dotenv').config();  // Load the environment variables from .env
const express = require('express');

const jobsRoute = require('./Routes/jobsRoute')
const userRoute = require('./Routes/userRoutes')
const resumeRoute =require('./Routes/resumeRoutes')
const coverLetterRoute = require('./Routes/coverLetterRoutes')

const pgp = require('pg-promise')();  // PostgreSQL promise library
const app = express();
const port = process.env.PORT || 5000; // Default to 5000 if no port is specified
const cors = require('cors')

// Database connection using pg-promise and environment variables


app.use(express.json())
app.use(cors())
app.use('/jobs', jobsRoute)
app.use('/users', userRoute)
app.use('/resumes', resumeRoute)
app.use('/coverletters',coverLetterRoute )

// Test route to check if the database is connected
app.get('/', (req, res) => {
  res.send('Hello Friend, Welcome to JobKo!');
});

// A simple route to query the database and return all users (example)
// app.get('/users', async (req, res) => {
//   try {
//     const users = await db.any('SELECT * FROM users');
//     console.log
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch users' });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
