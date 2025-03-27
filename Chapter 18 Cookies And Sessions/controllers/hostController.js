//Local module
const HomeClass = require("../models/homeModel");

exports.getAddhome = (req, res, next) => {
  console.log("current request is: ", req.url);
  res.render("./host/edit-home", {
    pageTitle: "Host Add your home",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHomes = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";
  console.log("Value of variable is : ", homeId, editing);

  /**
   *Here findByid again we have in built function in mongoose that exactly working same as we earlier define
   findHomeByid in monogo chappter.
   */
  HomeClass.findById(homeId).then((homeFound) => {
    if (!homeFound) {
      return res.redirect("/host/host-home-list");
    } else {
      console.log("Value of variable is : ", homeId, editing, homeFound);
      res.render("./host/edit-home", {
        homeFound: homeFound,
        pageTitle: "Edit your home",
        currentPage: "host-home-list",
        editing: editing,
      });
    }
  });
};

exports.postAddhome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl, description } =
    req.body;

  const home = new HomeClass({
    houseName,
    price,
    location,
    rating,
    photoUrl,
    description,
  });

  //Here Mongoose give save as built in function and save data it self automaticall.
  home.save().then(() => {
    console.log("Home saved successfully.");
  });

  res.render("./host/homeAdded", {
    pageTitle: "home added succesfully",
    currentPage: "homeAdded",
  });
};

exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photoUrl, description } =
    req.body;
  HomeClass.findById(id)
    .then((home) => {
      home.houseName = houseName;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.photoUrl = photoUrl;
      home.description = description;

      home
        .save()
        .then(() => {
          console.log("Home updated successsfully.");
        })
        .catch((error) => {
          console.log("There is an error while update home.", error);
        });

      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("There is an error while finding home.", error);
    });
};

exports.getHostHomes = (req, res, next) => {
  //in mongoose we have find function that by default returns all records automatically.
  HomeClass.find().then((registeredHomes) => {
    res.render("./host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host home list",
      currentPage: "host-home-list",
    });
  });
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Home come to delete:: ", homeId);

  HomeClass.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("There is an error while delete home", error);
    });
};
