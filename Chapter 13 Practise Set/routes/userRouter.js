//External module
const express = require('express');

//Local module
const { getHomes } = require('../controllers/homes');

//This will create new router for this file and can be used instead of app object in app.js.
const userRouter = express.Router();

userRouter.get("/", getHomes);

module.exports = userRouter;