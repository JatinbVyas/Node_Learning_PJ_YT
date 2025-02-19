
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

exports.getHomesDetails = (req, res, next) => {
  const homeId= req.params.homeId;
  console.log('Currently At home details page for homeid ::', homeId);
  res.render('store/home-detail',{pageTitle: "Home Details",currentPage:"home-list"});
  
};