//External module
const express = require('express');

//Local module
const homesController = require('../controllers/hostController');

//This will create new router for this file and can be used instead of app object in app.js.
const houseRouter = express.Router();

houseRouter.get("/add-home", homesController.getAddhome);

houseRouter.post("/add-home",homesController.postAddhome);

houseRouter.get("/host-home-list",homesController.getHostHomes);

houseRouter.get("/edit-home/:homeId",homesController.getEditHomes);

houseRouter.post("/edit-home",homesController.postEditHome);

houseRouter.post("/delete-home/:homeId",homesController.postDeleteHome);

/**
 * Below is another syntax for module exports.
 * With this we can multiple things can be exports.
 */
exports.houseRouter = houseRouter;