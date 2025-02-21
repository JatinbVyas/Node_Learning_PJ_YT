
//Local module
const HomeClass = require('../models/homeModel');

exports.getAddhome = (req, res, next) => {
  console.log('current request is: ',req.url);
  res.render('./host/edit-home',{pageTitle:"Host Add your home", currentPage:"addHome", editing: false});
};

exports.getEditHomes = (req, res, next) => {
   const homeId= req.params.homeId;
  const editing= req.query.editing === 'true';
  console.log('Value of variable is : ',homeId, editing);

  HomeClass.findHomeByid(homeId, homeFound=> {
    if(!homeFound){
      return res.redirect("/host/host-home-list");
    }
    else
    {
      console.log('Value of variable is : ',homeId, editing, homeFound);
      res.render('./host/edit-home',{homeFound: homeFound, pageTitle:"Edit your home", currentPage:"host-home-list", editing: editing});
    }
  });


  
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

exports.postEditHome = (req, res, next) => {
  console.log(req.body.photoUrl);
  
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

  home.id = req.body.id;

  home.saveHome();

  res.redirect("/host/host-home-list");
};

exports.getHostHomes = (req, res, next) => {
  HomeClass.fetchAll((registeredHomes)=> {
    res.render('./host/host-home-list',{registeredHomes: registeredHomes, pageTitle: "Host home list",currentPage:"host-home-list"});
  });
  
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Home come to delete:: ', homeId);

  HomeClass.deleteHomeByid(homeId, error => {
    if(error){
      console.log('There is an error while delete home', error);
    }
    res.redirect("/host/host-home-list");
  });
};
