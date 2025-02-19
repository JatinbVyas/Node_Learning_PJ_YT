
//Local module
const HomeClass = require('../models/homeModel');

exports.getAddhome = (req, res, next) => {
  console.log('current request is: ',req.url);
  res.render('./host/addHome',{pageTitle:"Host Add your home", currentPage:"addHome"});
};

exports.postAddhome = (req, res, next) => {
  console.log(req.body);
  
  /**
   * Now instead of array we will use of new class
   */
  const home = new HomeClass(
    req.body.houseName,
    req.body.price,
    req.body.location,
    req.body.rating,
    req.body.photoUrl
  );

  home.saveHome();

  res.render('./host/homeAdded',{pageTitle:"home added succesfully",currentPage:"homeAdded"});
};

exports.getHostHomes = (req, res, next) => {
  HomeClass.fetchAll((registeredHomes)=> {
    res.render('./host/host-home-list',{registeredHomes: registeredHomes, pageTitle: "Host home list",currentPage:"host-home-list"});
  });
  
};
