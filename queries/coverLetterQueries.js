const db = require("../db"); // Ensure correct path to your db connection

// Get all cover letters
const getAllCoverLetters = async () => {
  try {
    return await db.any("SELECT * FROM cover_letters ORDER BY created_at DESC");
  } catch (error) {
    console.error("Error fetching cover letters:", error);
    throw error;
  }
};

// Get one cover letter by ID
const getOneCoverLetter = async (id) => {
  try {
    return await db.oneOrNone("SELECT * FROM cover_letters WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error fetching cover letter:", error);
    throw error;
  }
};

// Create a new cover letter
const createCoverLetter = async (user_id, content) => {
  try {
    return await db.one(
      "INSERT INTO cover_letters (user_id, content) VALUES ($1, $2) RETURNING *",
      [user_id, content]
    );
  } catch (error) {
    console.error("Error creating cover letter:", error);
    throw error;
  }
};

// Update a cover letter
const updateCoverLetter = async (id, { content }) => {
  try {
    return await db.oneOrNone(
      "UPDATE cover_letters SET content = $1 WHERE id = $2 RETURNING *",
      [content, id]
    );
  } catch (error) {
    console.error("Error updating cover letter:", error);
    throw error;
  }
};

// Delete a cover letter
const deleteCoverLetter = async (id) => {
  try {
    const result = await db.result("DELETE FROM cover_letters WHERE id = $1", [id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error("Error deleting cover letter:", error);
    throw error;
  }
}; 

module.exports = {
  getAllCoverLetters,
  getOneCoverLetter,
  createCoverLetter,
  updateCoverLetter,
  deleteCoverLetter
};
