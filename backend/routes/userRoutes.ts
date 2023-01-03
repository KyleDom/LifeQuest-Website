const userController = require("../controllers/userController");
const authRoutes = require("../auth");
const express = require("express");
const router = express.Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/verify", authRoutes.authenticateToken, userController.verifySession);

module.exports = router; 