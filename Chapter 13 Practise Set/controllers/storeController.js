
//Local module
const HomeClass = require('../models/homeModel');

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

exports.getBookings = (req, res, next) => {
  /**
   * fetchAll is returning using callback so res.render comes under function becase once read operation
   * is complete and value get returns it will recevied in variable , here it is registeredHomes and then
   * we can proceed further.
   */
  HomeClass.fetchAll((registeredHomes)=> {
    res.render('store/bookings',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"bookings"});
  });
  
};