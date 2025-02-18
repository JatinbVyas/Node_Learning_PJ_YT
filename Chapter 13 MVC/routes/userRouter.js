//Core module
const path = require('path');

//External module
const express = require('express');

//Local module
const rootDir = require('../utils/pathUtil');
const { registeredHomes } = require('./hosrRouter');

//This will create new router for this file and can be used instead of app object in app.js.
const userRouter = express.Router();

userRouter.get("/",(req, res, next) => {
  console.log(registeredHomes);
  res.render('home',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"home"});
});

module.exports = userRouter;