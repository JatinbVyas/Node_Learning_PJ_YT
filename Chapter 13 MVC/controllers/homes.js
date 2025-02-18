const registeredHomes = [];

exports.getAddhome = (req, res, next) => {
  res.render('addHome',{pageTitle:"Add your home", currentPage:"addHome"});
};

exports.postAddhome = (req, res, next) => {
  console.log(req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded',{pageTitle:"home added succesfully",currentPage:"homeAdded"});
};

exports.getHomes = (req, res, next) => {
  console.log(registeredHomes);
  res.render('home',{registeredHomes: registeredHomes, pageTitle: "airbnbHome",currentPage:"home"});
};