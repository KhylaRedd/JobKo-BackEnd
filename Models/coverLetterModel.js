const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const API_KEY = process.env.GEMINI_API_KEY;

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(API_KEY);

/**
 * Generate a cover letter using Gemini AI.
 * @param {string} userName - The name of the applicant.
 * @param {string} jobTitle - The title of the job.
 * @param {string} company - The company name.
 * @returns {Promise<string>} - The AI-generated cover letter.
 */
const generateCoverLetter = async (userName, jobTitle, company) => {
  try {
    // Get the AI model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate a cover letter
    const prompt = `Write a professional cover letter for ${userName} applying for a ${jobTitle} position at ${company}. The tone should be confident, tailored, and engaging.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text || "Failed to generate a cover letter.";
  } catch (error) {
    console.error("Error generating cover letter:", error);
    throw new Error("AI cover letter generation failed.");
  }
};

module.exports = { generateCoverLetter };

