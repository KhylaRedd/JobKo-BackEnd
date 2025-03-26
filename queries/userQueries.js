const db = require("../db"); // Import db connection
const { hashPassword } = require("../utils/hash");
//importing hash function
// Get all users
const getAllUsers = async () => {
  try {
    return await db.any("SELECT * FROM users");
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Get one user by ID
const getOneUser = async (id) => {
  try {
    return await db.one("SELECT * FROM users WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// Create a new user
const createUser = async (user) => {
  try {
    const hashedPassword = await hashPassword(user.password); 

    return await db.one(
      "INSERT INTO users (username, email, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        user.username,
        user.email,
        hashedPassword,
        user.first_name,
        user.last_name
      ]
    );
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Update user details by ID
const updateUser = async (id, user) => {
  try {
    const { username, email, first_name, last_name } = user;
    return await db.one(
      `UPDATE users SET username = $1, email = $2, first_name = $3, last_name = $4 WHERE id = $5 RETURNING *`,
      [username, email, first_name, last_name, id]
    );
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// Delete a user by ID
const deleteUser = async (id) => {
  try {
    return await db.none("DELETE FROM users WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Export queries to use in controllers
module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
};

