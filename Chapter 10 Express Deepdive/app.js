//import external module for express.
const express = require('express');
const bodyParser = require('body-parser');

//now execute first express and get object from it.
const appPractiseSet = express();

//Now we will write middleware as requested, below two are dummy middleware as requested.

appPractiseSet.use((req, res, next) => {
  console.log('Inside the First Dummy middleware.', req.url, req.method);
  next();
});

appPractiseSet.use((req, res, next) => {
  console.log('Inside the Second Dummy middleware.', req.url, req.method);
  next();
});

//Now adding one more middleware to handle home page request.
appPractiseSet.get("/",(req, res, next) => {
  console.log('Inside the home page middleware', req.url, req.method);
  res.send('<h1>Welcome to Home page.</h1>');
  next();
});

//Now adding one more middleware to handle /contact-us page request for get.
appPractiseSet.get("/contact-us",(req, res, next) => {
  console.log('Inside the contact us get middleware', req.url, req.method);
  res.send(`<h1>Welcome !!!</h1>
    <br><form action="/contact-us" method="POST">
    <input type="text" id="personName" name="personName" placeholder="Enter your name"/>
    <input type="email" id="personEmail" name="personEmail" placeholder="Enter your Email"/>
    <input type="submit" value="Submit"/>
    </form>
    `);
    next();
});

//Now adding one more middleware to handle /contact-us page POST request before parsing body
appPractiseSet.post("/contact-us",(req, res, next) => {
  console.log('Inside the contact-us page post middleware before body parser.', req.url, req.method, req.body);
  next();
});

//Now parsing body data using below middleware and use of body-parser package.
/**
 * With use of the body-parser package and with below syntax we parse the body request.
 * And automatocally we can get body data in req.body variable after partsing body request
 * using below middleware.
 * For use of the first we need to install boday-parser packeage using npm install boday-parser --save
 * for parsing need to write below middleware.
 */
appPractiseSet.use(bodyParser.urlencoded());

//Now adding one more middleware to handle /contact-us page POST request.
appPractiseSet.post("/contact-us",(req, res, next) => {
  console.log('Inside the contact-us page post middleware.', req.url, req.method, req.body);
  res.send('<h1>Thanks for contacting us.</h1>');
});

//Now we will start and listen server using express object.
const PORT = 3000;
appPractiseSet.listen(PORT, () => {
  console.log(`Server is stated and listing on http://localhost:${PORT}`);
});