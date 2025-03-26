// resumeQueries.js
const db = require("../db"); // Import database connection

// Get all resumes
const getAllResumes = async () => {
  try {
    return await db.any("SELECT * FROM resumes");
  } catch (error) {
    console.error("Error fetching resumes:", error);
    throw error;
  }
};

// Get one resume by ID
const getOneResume = async (id) => {
  try {
    return await db.one("SELECT * FROM resumes WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error fetching resume:", error);
    throw error;
  }
};

// Create a new resume entry
const createResume = async (resume) => {
  try {
    return await db.one(
      "INSERT INTO resumes (user_id, content, ats_score) VALUES ($1, $2, $3) RETURNING *",
      [
        resume.user_id,  // user_id should be passed from the body
        resume.content,  // content of the resume
        resume.ats_score || 0,  // ats_score defaults to 0 if not provided
      ]
    );
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error;
  }
};

// Update a resume by ID
const updateResume = async (id, resume) => {
  try {
    return await db.one(
      "UPDATE resumes SET content = $1, ats_score = $2 WHERE id = $3 RETURNING *",
      [
        resume.content,
        resume.ats_score,
        id
      ]
    );
  } catch (error) {
    console.error("Error updating resume:", error);
    throw error;
  }
};

// Delete a resume
const deleteResume = async (id) => {
  try {
    return await db.one("DELETE FROM resumes WHERE id = $1 RETURNING *", [id]);
  } catch (error) {
    console.error("Error deleting resume:", error);
    throw error;
  }
};

module.exports = {
  getAllResumes,
  getOneResume,
  createResume,
  updateResume,
  deleteResume
};
