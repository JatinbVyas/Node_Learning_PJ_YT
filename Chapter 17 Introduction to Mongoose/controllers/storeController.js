//Local module
const FavouriteClass = require("../models/favourtieModel");
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
  FavouriteClass.getFavourites().then((favouriteHomeIds) => {
    favouriteHomeIds = favouriteHomeIds.map((fav) => fav.homeId);
    HomeClass.find().then((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favouriteHomeIds.includes(home._id.toString())
      );
      res.render("store/favourite-list", {
        favouriteHomes: favouriteHomes,
        pageTitle: "Favourite Homes",
        currentPage: "favourite-list",
      });
    });
  });
};

exports.postAddToFavourities = (req, res, next) => {
  console.log("you are in post favourite list", req.body, req.url);
  FavouriteClass.findFavouriteHomeByid(req.body.homeId).then(
    (homesFoundById) => {
      if (homesFoundById) {
        console.log("Home is alredy exist in favourite list.");
        res.redirect("/store/favourite-list");
      } else {
        FavouriteClass.addToFavourite(req.body.homeId)
          .then(() => {
            console.log("Your home added to your favourite list.");
          })
          .catch((error) => {
            console.log("Error while add to favourite:: ", error, req.body);
          })
          .finally(() => {
            res.redirect("/store/favourite-list");
          });
      }
    }
  );
};

exports.postRemoveToFavourities = (req, res, next) => {
  console.log(
    "you are in post to remove from favourite list",
    req.params.homeId
  );
  FavouriteClass.removeFavouriteHomeByid(req.params.homeId)
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
  HomeClass.findHomeByid(homeId).then((homesFoundById) => {
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
