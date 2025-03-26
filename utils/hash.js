const bcrypt = require("bcrypt");

const saltRounds = 10;

/**
 * Hashes a plain text password.
 * @param {string} password - The user's plain text password.
 * @returns {Promise<string>} - The hashed password.
 */
const hashPassword = async (password) => {
    return await bcrypt.hash(password, saltRounds);
};

/**
 * Compares a plain text password with a hashed password.
 * @param {string} enteredPassword - The plain text password entered by the user.
 * @param {string} storedHashedPassword - The hashed password stored in the database.
 * @returns {Promise<boolean>} - True if passwords match, false otherwise.
 */
const verifyPassword = async (enteredPassword, storedHashedPassword) => {
    return await bcrypt.compare(enteredPassword, storedHashedPassword);
};

module.exports = { hashPassword, verifyPassword };
