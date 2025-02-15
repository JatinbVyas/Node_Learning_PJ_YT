const express = require('express');

const appAirbnb = express();

//Creating middleware
appAirbnb.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

appAirbnb.get("/",(req, res, next) => {
  res.send(`
    <h1> Welcome to airbnb </h1>
    <a href="/add-home">Add Home</a>
    `)
  next();
});

/**
 * In earlier chapter we seen body-parser for parsing request and adding to req.body.
 * here is the another way without adding body-parser package is express itself.
 * using below syntax express will parse the body request data for any request.
 */
appAirbnb.use(express.urlencoded());

appAirbnb.get("/add-home",(req, res, next) => {
  res.send(`
    <h1> Register your home </h1>
    <form action="add-home" method="POST">
    <input type="text" id="houseName" name="houseName" placeholder="Enter name of your house"/>
    <input type="submit"/>
    </form>
    `);
});

appAirbnb.post("/add-home",(req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1> Home registered successfully. </h1>
    <a href="/">Go to home</a>
    `);
});

//Now start and listen server.
const PORT = 3000;
appAirbnb.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});