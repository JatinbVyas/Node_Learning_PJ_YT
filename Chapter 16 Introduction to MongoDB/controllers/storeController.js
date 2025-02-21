
//Local module
const FavouriteClass = require('../models/favourtieModel');
const HomeClass = require('../models/homeModel');

exports.Index = (req, res, next) => {
 HomeClass.fetchAll().then(registeredHomes => {
  res.render('store/index',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"index"});
 });
  
};

exports.getHomes = (req, res, next) => {
  HomeClass.fetchAll().then(registeredHomes => {
    res.render('store/home-list',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"home-list"});
  });
  
};

exports.getBookings = (req, res, next) => {
  HomeClass.fetchAll().then(registeredHomes => {
    res.render('store/bookings',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"bookings"});
  });
  
};

exports.getFavourite = (req, res, next) => {
  FavouriteClass.getFavourites((favouriteHomeIds)=>{
    HomeClass.fetchAll().then(registeredHomes => {
      const favouriteHomes = registeredHomes.filter(home => favouriteHomeIds.includes(home._id));
      res.render('store/favourite-list',{favouriteHomes: favouriteHomes, pageTitle: "Favourite Homes",currentPage:"favourite-list"});
    });
  });
 
  
};

exports.postAddToFavourities = (req, res, next) => {
  console.log('you are in post favourite list', req.body, req.url);
  FavouriteClass.addToFavourite(req.body.homeId, error => {
    if(error){
      console.log('Error while add to favourite:: ', error, req.body);
    }
    res.redirect('/store/favourite-list');
  });
 };

 exports.postRemoveToFavourities = (req, res, next) => {
  console.log('you are in post to remove from favourite list', req.params.homeId);
  FavouriteClass.removeFavouriteHomeByid(req.params.homeId, error => {
    if(error){
      console.log('Error while remove favourite:: ', error, req.params.homeId);
    }
    res.redirect('/store/favourite-list');
  });
 };

exports.getHomesDetails = (req, res, next) => {
  const homeId= req.params.homeId;
  HomeClass.findHomeByid(homeId).then(homesFoundById => {
    if(!homesFoundById){
      console.log('Sorry! Your requested home is not found.');
      res.redirect("/store/home-list");
    }
    else{
    res.render('store/home-detail',{homeData: homesFoundById, pageTitle: "Home Details",currentPage:"home-list"});
    }
  });
};