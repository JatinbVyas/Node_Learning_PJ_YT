exports.getAddhome = (req, res, next) => {
  res.render('addHome',{pageTitle:"Add your home", currentPage:"addHome"});
}