//External module
const express = require("express");

//Local module
const authController = require("../controllers/authController");

//This will create new router for this file and can be used instead of app object in app.js.
const authRouter = express.Router();

authRouter.get("/login", authController.getLogin);

module.exports = authRouter;
