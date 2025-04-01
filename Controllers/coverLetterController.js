const {
    getAllCoverLetters,
    getOneCoverLetter,
    createCoverLetter,
    updateCoverLetter,
    deleteCoverLetter
  } = require("../queries/coverLetterQueries");
  
  // GET all cover letters
  const getCoverLettersController = async (req, res) => {
    try {
      const coverLetters = await getAllCoverLetters();
      res.status(200).json(coverLetters);
    } catch (err) {
      console.error("Error fetching cover letters:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // GET a single cover letter by ID
  const getCoverLetterController = async (req, res) => {
    try {
      const coverLetter = await getOneCoverLetter(req.params.id);
      if (coverLetter) {
        res.status(200).json(coverLetter);
      } else {
        res.status(404).json({ error: "Cover letter not found" });
      }
    } catch (err) {
      console.error("Error fetching cover letter:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // CREATE a new cover letter
  const { generateCoverLetter } = require("../Models/coverLetterModel"); // import your AI generation model

  const createCoverLetterController = async (req, res) => {
    try {
        console.log("Request Body:", req.body);  // <-- Add this line

        const { user_id, job_id, job_title, company, content } = req.body;

        if (!user_id || !job_id || !job_title || !company || !content) {
            return res.status(400).json({ error: "User ID, Job ID, Job Title, and company are required!" });
        }

        const newCoverLetter = await createCoverLetter(user_id, job_id, job_title, company, content);
        res.status(201).json(newCoverLetter);
    } catch (err) {
        console.error("Error creating cover letter:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};


  
  // UPDATE a cover letter
  const updateCoverLetterController = async (req, res) => {
    try {
      const updatedCoverLetter = await updateCoverLetter(req.params.id, req.body);
      if (updatedCoverLetter) {
        res.status(200).json(updatedCoverLetter);
      } else {
        res.status(404).json({ error: "Cover letter not found" });
      }
    } catch (err) {
      console.error("Error updating cover letter:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  // DELETE a cover letter
  const deleteCoverLetterController = async (req, res) => {
    try {
      const deleted = await deleteCoverLetter(req.params.id);
      if (deleted) {
        res.status(200).json({ message: "Cover letter deleted successfully" });
      } else {
        res.status(404).json({ error: "Cover letter not found" });
      }
    } catch (err) {
      console.error("Error deleting cover letter:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  module.exports = {
    getCoverLettersController,
    getCoverLetterController,
    createCoverLetterController,
    updateCoverLetterController,
    deleteCoverLetterController
  };
  