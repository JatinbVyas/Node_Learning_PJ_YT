//Core module
const path = require('path');

//External module
const express = require('express');

//Internal module
const userRouter = require('./routes/userRouter');
//Below is destructure the houseRouter because in that file multiple things are exported.
const {houseRouter} = require('./routes/hosrRouter');
const rootDir = require('./utils/pathUtil');

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

appAirbnb.use("/host",houseRouter);

/**
 * Below express.static used in middleware to make file public, so that can be used or can be access at client side.
 *  You just need to create public folder and place files inside that folder and add below middleware.
 */
appAirbnb.use(express.static(path.join(rootDir,"public")));

appAirbnb.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir,"views","404NotFound.html"));;
});

//Now start and listen server.
const PORT = 3000;
appAirbnb.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});