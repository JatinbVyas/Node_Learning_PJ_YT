
//Local module
const HomeClass = require('../models/homeModel');

exports.Index = (req, res, next) => {
 HomeClass.fetchAll((registeredHomes)=> {
res.render('store/index',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"index"});
  });
  
};

exports.getHomes = (req, res, next) => {
  HomeClass.fetchAll((registeredHomes)=> {
    res.render('store/home-list',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"home-list"});
  });
  
};

exports.getBookings = (req, res, next) => {
  HomeClass.fetchAll((registeredHomes)=> {
    res.render('store/bookings',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"bookings"});
  });
  
};

exports.getFavourite = (req, res, next) => {
 HomeClass.fetchAll((registeredHomes)=> {
    res.render('store/favourite-list',{registeredHomes: registeredHomes, pageTitle: "Favourite Homes",currentPage:"favourite-list"});
  });
  
};