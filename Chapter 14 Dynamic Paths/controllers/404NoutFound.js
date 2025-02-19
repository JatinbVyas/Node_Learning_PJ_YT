
exports.NotFoundPage = (req, res, next) => {
  res.status(404).render('404NotFound',{pageTitle:"Page not found.", currentPage:"404NotFound"});;
};