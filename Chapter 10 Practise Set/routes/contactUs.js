//import external module for express.
const express = require('express');
const path = require('path');

//Local module
const rootDir = require('../utils/pathUtil');

const contactUsRouter = express.Router();

//Now adding one more middleware to handle home page request.
contactUsRouter.get("/",(req, res, next) => {
  console.log('Inside the home page middleware', req.url, req.method);
  res.sendFile(path.join(rootDir,"views","home.html"));
});

//Now adding one more middleware to handle /contact-us page request for get.
contactUsRouter.get("/contact-us",(req, res, next) => {
  console.log('Inside the contact us get middleware', req.url, req.method);
  res.sendFile(path.join(rootDir,"views","contactUs.html"));
});

//Now adding one more middleware to handle /contact-us page POST request.
contactUsRouter.post("/contact-us",(req, res, next) => {
  console.log('Inside the contact-us page post middleware', req.url, req.method, req.body);
  res.sendFile(path.join(rootDir,"views","contactSC.html"));
});

module.exports = contactUsRouter;