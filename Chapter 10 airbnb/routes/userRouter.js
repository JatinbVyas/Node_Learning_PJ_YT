//External module
const express = require('express');

//This will create new router for this file and can be used instead of app object in app.js.
const userRouter = express.Router();

userRouter.get("/",(req, res, next) => {
  res.send(`
    <h1> Welcome to airbnb </h1>
    <a href="/add-home">Add Home</a>
    `)
  next();
});

module.exports = userRouter;