//Local module
const Favourite = require("../models/favourtieModel");
const HomeClass = require("../models/homeModel");

exports.Index = (req, res, next) => {
  HomeClass.find().then((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnbHome",
      currentPage: "index",
    });
  });
};

exports.getHomes = (req, res, next) => {
  HomeClass.find().then((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnbHome",
      currentPage: "home-list",
    });
  });
};

exports.getBookings = (req, res, next) => {
  HomeClass.find().then((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnbHome",
      currentPage: "bookings",
    });
  });
};

exports.getFavourite = (req, res, next) => {
  Favourite.find()
    .populate("houseId") //Here Populate is a function that populate auto all data from parent table based on id match
    .then((favouriteHomeIds) => {
      const favouriteHomes = favouriteHomeIds.map((fav) => fav.houseId);
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "Favourite Homes",
        currentPage: "favourite-list",
      });
    });
};

exports.postAddToFavourities = (req, res, next) => {
  console.log("you are in post favourite list", req.body, req.url);
  // mongoose give fineOne also as an inbuilt function
  Favourite.findOne({ houseId: req.body.homeId })
    .then((fav) => {
      if (fav) {
        console.log("Home already exist in Favourite list.");
        return res.redirect("/store/favourite-list");
      } else {
        fav = new Favourite({ houseId: req.body.homeId });
        fav.save();
      }
    })
    .then((result) => {
      return res.redirect("/store/favourite-list");
    })
    .catch((err) => {
      console.log("Error while marking as fa");
    });
};

exports.postRemoveToFavourities = (req, res, next) => {
  console.log(
    "you are in post to remove from favourite list",
    req.params.homeId
  );
  //findOneAndDelete is also an inbuild fucntion of mongoose.
  Favourite.findOneAndDelete({ houseId: req.params.homeId })
    .then(() => {
      console.log("Your home deleted from your favourite list.");
    })
    .catch((error) => {
      console.log("Error while remove to favourite:: ", error, req.body);
    })
    .finally(() => {
      res.redirect("/store/favourite-list");
    });
};

exports.getHomesDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  HomeClass.findById(homeId).then((homesFoundById) => {
    if (!homesFoundById) {
      console.log("Sorry! Your requested home is not found.");
      res.redirect("/store/home-list");
    } else {
      res.render("store/home-detail", {
        homeData: homesFoundById,
        pageTitle: "Home Details",
        currentPage: "home-list",
      });
    }
  });
};
