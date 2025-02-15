//External module
const express = require('express');

//Internal module
const userRouter = require('./routes/userRouter');
const houseRouter = require('./routes/hosrRouter');

const appAirbnb = express();

//Creating middleware
appAirbnb.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

//Below sysntax use to call router that is created for sepration of code.
appAirbnb.use(userRouter);

/**
 * In earlier chapter we seen body-parser for parsing request and adding to req.body.
 * here is the another way without adding body-parser package is express itself.
 * using below syntax express will parse the body request data for any request.
 */
appAirbnb.use(express.urlencoded());

appAirbnb.use(houseRouter);

appAirbnb.use((req, res, next) => {
  res.status(404).send("<h1> 404 Page not found. </h1>");
});

//Now start and listen server.
const PORT = 3000;
appAirbnb.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});