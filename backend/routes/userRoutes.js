var userController = require("../controllers/userController");
var authRoutes = require("../auth");
var express = require("express");
var router = express.Router();
router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/verify", authRoutes.authenticateToken, userController.verifySession);
module.exports = router;
