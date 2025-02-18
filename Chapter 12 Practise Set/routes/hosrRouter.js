//Core module
const path = require('path');

//External module
const express = require('express');

//Local module
const rootDir = require('../utils/pathUtil');

//This will create new router for this file and can be used instead of app object in app.js.
const houseRouter = express.Router();

houseRouter.get("/add-home",(req, res, next) => {
  res.render('addHome',{pageTitle:"Add your home"});
});

const registeredHomes = [];

houseRouter.post("/add-home",(req, res, next) => {
  console.log(req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded',{pageTitle:"home added succesfully"});
});

/**
 * Below is another syntax for module exports.
 * With this we can multiple things can be exports.
 */
exports.houseRouter = houseRouter;
exports.registeredHomes = registeredHomes;