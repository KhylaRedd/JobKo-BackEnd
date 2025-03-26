// jobsController.js
const { getAllJobs, getOneJob, createJob, updateJob, deleteJob } = require("../queries/jobsQueries");

// Get all jobs
const getJobsController = async (req, res) => {
  try {
    const jobs = await getAllJobs();
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get one job by ID
const getJobController = async (req, res) => {
  try {
    const job = await getOneJob(req.params.id);
    res.status(200).json(job);
  } catch (err) {
    console.error("Error fetching job:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new job
const createJobController = async (req, res) => {
  try {
    // Defaulting is_favorite to FALSE if not provided
    const { title, description, company, is_favorite = false } = req.body;
    const newJob = await createJob({ title, description, company, is_favorite });
    res.status(201).json(newJob);
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an existing job
const updateJobController = async (req, res) => {
  try {
    const updatedJob = await updateJob(req.params.id, req.body);
    res.status(200).json(updatedJob);
  } catch (err) {
    console.error("Error updating job:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a job
const deleteJobController = async (req, res) => {
  try {
    const deletedJob = await deleteJob(req.params.id);
    res.status(200).json({ message: "Job deleted successfully", deletedJob });
  } catch (err) {
    console.error("Error deleting job:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getJobsController,
  getJobController,
  createJobController,
  updateJobController,
  deleteJobController
};
