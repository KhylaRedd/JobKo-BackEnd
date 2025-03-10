const db = require("./db"); // Import db connection

// Get all users
const getAllUsers = async () => {
  try {
    return await db.any("SELECT * FROM users");
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// Export queries to use in controllers
module.exports = {
  getAllUsers,
};
