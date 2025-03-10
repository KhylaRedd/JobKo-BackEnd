// controllers/userController.js
const pool = require('../database'); // Import the pool object

const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users'); // Query the users table
    res.status(200).json(result.rows); // Return the results in JSON format
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getOneUser = async (id) => {
  try {
      const oneUser = await db.one("SELECT * FROM users WHERE id=$1", id)
      return oneUser
  } catch (error) {
      return error
  }
}

module.exports = { getAllUsers, getOneUser };
