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
   * Earlier was used file system for store and retrive data.
   * Now My SQL database system used to store and retrive data.
   * And due to this technique is changed of fetching data.
   * From findHomeByid column execute and send data here.
   * After .then function applied to we received data in rows and fields in array format
   * here by id specific one record is written and due to this areay[0] is written.
   */
  HomeClass.findHomeByid(homeId).then((homeFound) => {
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
  /**
   * Now instead of array we will use of new class
   */
  const home = new HomeClass(
    req.body.id,
    req.body.houseName,
    req.body.price,
    req.body.location,
    req.body.rating,
    req.body.photoUrl,
    req.body.description
  );

  home
    .saveHome()
    .then(() => {
      console.log("Home updated successsfully.");
    })
    .catch((error) => {
      console.log("There is an error while update home.", error);
    });

  res.redirect("/host/host-home-list");
};

exports.getHostHomes = (req, res, next) => {
  HomeClass.fetchAll().then((registeredHomes) => {
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

  HomeClass.deleteHomeByid(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch((error) => {
      console.log("There is an error while delete home", error);
    });
};
