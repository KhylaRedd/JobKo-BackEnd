// jobQueries.js
const db = require("../db"); // Import database connection

// Get all jobs
const getAllJobs = async () => {
  try {
    return await db.any("SELECT * FROM jobs");
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

// Get one job by ID
const getOneJob = async (id) => {
  try {
    return await db.one("SELECT * FROM jobs WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error fetching job:", error);
    throw error;
  }
};

// Create a new job entry
const createJob = async (job) => {
  try {
    return await db.one(
      "INSERT INTO jobs (title, description, company, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        job.title,
        job.description,
        job.company,
        job.is_favorite // Ensure is_favorite is included here
      ]
    );
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

// Update a job by ID
const updateJob = async (id, job) => {
  try {
    return await db.one(
      "UPDATE jobs SET title = $1, description = $2, company = $3, is_favorite = $4 WHERE id = $5 RETURNING *",
      [
        job.title,
        job.description,
        job.company,
        job.is_favorite, // Include is_favorite when updating
        id
      ]
    );
  } catch (error) {
    console.error("Error updating job:", error);
    throw error;
  }
};

// Delete a job
const deleteJob = async (id) => {
  try {
    return await db.one("DELETE FROM jobs WHERE id = $1 RETURNING *", [id]);
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error;
  }
};

module.exports = {
  getAllJobs,
  getOneJob,
  createJob,
  updateJob,
  deleteJob
};
