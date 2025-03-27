//Core module
const path = require("path");

//External module
const express = require("express");

//Internal module
const storeRouter = require("./routes/storeRouter");
//Below is destructure the houseRouter because in that file multiple things are exported.
const { houseRouter } = require("./routes/hosrRouter");
const rootDir = require("./utils/pathUtil");
const { NotFoundPage } = require("./controllers/404NoutFound");
const { default: mongoose } = require("mongoose");
const authRouter = require("./routes/authRouter");

const appAirbnb = express();

/**
 * After installing ejs, for use of the EJS below two things we need to set.
 * using this set method, we define that we are using EJS template engine
 * and our view pages are in views folder
 * */
appAirbnb.set("view engine", "ejs");
appAirbnb.set("views", "views");

//Creating middleware
appAirbnb.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

/**
 * In earlier chapter we seen body-parser for parsing request and adding to req.body.
 * here is the another way without adding body-parser package is express itself.
 * using below syntax express will parse the body request data for any request.
 */
appAirbnb.use(express.urlencoded());

//Below sysntax use to call router that is created for sepration of code.
appAirbnb.use(storeRouter);

appAirbnb.use(authRouter);

appAirbnb.use("/host", houseRouter);

/**
 * Below express.static used in middleware to make file public, so that can be used or can be access at client side.
 *  You just need to create public folder and place files inside that folder and add below middleware.
 */
appAirbnb.use(express.static(path.join(rootDir, "public")));

appAirbnb.use(NotFoundPage);

//Connect mongo db first and in return success callback start server.
const PORT = 3000;
const dbPath =
  "mongodb+srv://jatinmongo:jatinmongo321$@jackmongo.x0ybk.mongodb.net/airbnbhomes?retryWrites=true&w=majority&appName=JackMongo";
/**
 * Here we learning new concept of mongoose.
 * So earlier we were connecting using mongodb connected now instead of that we are connecting using
 * mongoose.connect and once it connected we are starting our server.
 * for connecting we need to pass our db path/url with db name after mogodb.net/ {here db name}?
 */
mongoose
  .connect(dbPath)
  .then(() => {
    console.log("Connected to monogoDB");
    //Now start and listen server.
    appAirbnb.listen(PORT, () => {
      console.log(`Server is running on address http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error while connecting to Mongoose. ", err);
  });
