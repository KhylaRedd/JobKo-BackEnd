// resumesController.js
const { getAllResumes, getOneResume, createResume, updateResume, deleteResume } = require("../queries/resumeQueries");

// Get all resumes
const getResumesController = async (req, res) => {
  try {
    const resumes = await getAllResumes();
    res.status(200).json(resumes);
  } catch (err) {
    console.error("Error fetching resumes:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get one resume by ID
const getResumeController = async (req, res) => {
  try {
    const resume = await getOneResume(req.params.id);
    res.status(200).json(resume);
  } catch (err) {
    console.error("Error fetching resume:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new resume
const createResumeController = async (req, res) => {
  try {
    const { user_id, content, ats_score = 0 } = req.body;
    const newResume = await createResume({ user_id, content, ats_score });
    res.status(201).json(newResume);
  } catch (err) {
    console.error("Error creating resume:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an existing resume
const updateResumeController = async (req, res) => {
  try {
    const updatedResume = await updateResume(req.params.id, req.body);
    res.status(200).json(updatedResume);
  } catch (err) {
    console.error("Error updating resume:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a resume
const deleteResumeController = async (req, res) => {
  try {
    const deletedResume = await deleteResume(req.params.id);
    res.status(200).json({ message: "Resume Demolished", deletedResume });
  } catch (err) {
    console.error("Error deleting resume:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getResumesController,
  getResumeController,
  createResumeController,
  updateResumeController,
  deleteResumeController
};
