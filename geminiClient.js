const { PredictionServiceClient } = require("@google-cloud/aiplatform");
const path = require("path");

// Load service account key
const keyPath = path.join(__dirname, "config", "gemini-key.json");

const client = new PredictionServiceClient({
  keyFilename: keyPath, // Path to your service account JSON file
});

module.exports = client;
