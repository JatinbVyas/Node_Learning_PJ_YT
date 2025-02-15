//Core module
const path = require('path');

//External module
const express = require('express');

//This will create new router for this file and can be used instead of app object in app.js.
const userRouter = express.Router();

userRouter.get("/",(req, res, next) => {
  res.sendFile(path.join(__dirname,"../","views","home.html"));
});

module.exports = userRouter;