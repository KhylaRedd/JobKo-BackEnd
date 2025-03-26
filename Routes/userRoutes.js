const express = require("express");
const { getUsersController, getUserController, createUserController } = require("../Controllers/userController");

const router = express.Router();

router.get("/", getUsersController);
router.get("/:id", getUserController);
router.post("/", createUserController);

module.exports = router;
