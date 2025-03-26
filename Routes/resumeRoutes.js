// resumeRoutes.js
const express = require("express");
const router = express.Router();
const {
  getResumesController,
  getResumeController,
  createResumeController,
  updateResumeController,
  deleteResumeController
} = require("../Controllers/resumeController");  // Import controller functions

// GET all resumes
router.get("/", getResumesController);

// GET a specific resume by ID
router.get("/:id", getResumeController);

// POST a new resume
router.post("/", createResumeController);

// PUT (update) a resume by ID
router.put("/:id", updateResumeController);

// DELETE a resume by ID
router.delete("/:id", deleteResumeController);

module.exports = router;
