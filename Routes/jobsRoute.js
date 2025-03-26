// jobRoutes.js
const express = require("express");
const router = express.Router();
const {
  getJobsController,
  getJobController,
  createJobController,
  updateJobController,
  deleteJobController
} = require("../Controllers/jobsController");  // Import controller functions

// GET all jobs
router.get("/", getJobsController);

// GET a specific job by ID
router.get("/:id", getJobController);

// POST a new job
router.post("/", createJobController);

// PUT (update) a job by ID
router.put("/:id", updateJobController);

// DELETE a job by ID
router.delete("/:id", deleteJobController);

module.exports = router;
