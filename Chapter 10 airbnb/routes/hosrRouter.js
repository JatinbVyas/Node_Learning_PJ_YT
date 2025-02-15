//External module
const express = require('express');

//This will create new router for this file and can be used instead of app object in app.js.
const houseRouter = express.Router();

houseRouter.get("/add-home",(req, res, next) => {
  res.send(`
    <h1> Register your home </h1>
    <form action="add-home" method="POST">
    <input type="text" id="houseName" name="houseName" placeholder="Enter name of your house"/>
    <input type="submit"/>
    </form>
    `);
});

houseRouter.post("/add-home",(req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1> Home registered successfully. </h1>
    <a href="/">Go to home</a>
    `);
});

module.exports = houseRouter;