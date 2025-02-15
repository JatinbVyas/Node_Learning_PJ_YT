//Core module
const path = require('path');

//External module
const express = require('express');

//This will create new router for this file and can be used instead of app object in app.js.
const houseRouter = express.Router();

houseRouter.get("/add-home",(req, res, next) => {
  res.sendFile(path.join(__dirname,"../","views","addhome.html"));
});

houseRouter.post("/add-home",(req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname,"../","views","homeAdded.html"));
});

module.exports = houseRouter;