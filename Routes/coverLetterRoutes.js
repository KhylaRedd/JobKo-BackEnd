const express = require("express");
const router = express.Router();
const {
  getCoverLettersController,
  getCoverLetterController,
  createCoverLetterController,
  updateCoverLetterController,
  deleteCoverLetterController
} = require("../Controllers/coverLetterController");

// GET all cover letters
router.get("/", getCoverLettersController);

// GET a single cover letter by ID
router.get("/:id", getCoverLetterController);

// POST a new cover letter
router.post("/", createCoverLetterController);

// PUT (update) a cover letter
router.put("/:id", updateCoverLetterController);

// DELETE a cover letter
router.delete("/:id", deleteCoverLetterController);

module.exports = router;
