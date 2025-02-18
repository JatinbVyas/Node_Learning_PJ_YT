
//Local module
const HomeClass = require('../models/homeModel');

exports.getAddhome = (req, res, next) => {
  res.render('host/addHome',{pageTitle:"Add your home", currentPage:"addHome"});
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

  res.render('host/homeAdded',{pageTitle:"home added succesfully",currentPage:"homeAdded"});
};

exports.getHomes = (req, res, next) => {
  /**
   * fetchAll is returning using callback so res.render comes under function becase once read operation
   * is complete and value get returns it will recevied in variable , here it is registeredHomes and then
   * we can proceed further.
   */
  HomeClass.fetchAll((registeredHomes)=> {
    res.render('store/home-list',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"home-list"});
  });
  
};