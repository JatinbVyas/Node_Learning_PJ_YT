//External module
const express = require('express');

//Local module
const storeController = require('../controllers/storeController');

//This will create new router for this file and can be used instead of app object in app.js.
const storeRouter = express.Router();

storeRouter.get("/", storeController.Index);

storeRouter.get("/store/home-list", storeController.getHomes);

storeRouter.get("/store/bookings", storeController.getBookings);

storeRouter.get("/store/favourite-list", storeController.getFavourite);

storeRouter.get("/homes/:homeId", storeController.getHomesDetails);

storeRouter.post("/store/favourite-list", storeController.postAddToFavourities);

storeRouter.post("/store/remove-favourite/:homeId", storeController.postRemoveToFavourities);

module.exports = storeRouter;