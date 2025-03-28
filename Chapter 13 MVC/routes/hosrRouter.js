//External module
const express = require('express');

//Local module
const homesController = require('../controllers/homes');

//This will create new router for this file and can be used instead of app object in app.js.
const houseRouter = express.Router();

houseRouter.get("/add-home", homesController.getAddhome);

houseRouter.post("/add-home",homesController.postAddhome);

/**
 * Below is another syntax for module exports.
 * With this we can multiple things can be exports.
 */
exports.houseRouter = houseRouter;