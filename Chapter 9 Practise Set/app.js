//import external module for express.
const express = require('express');

//now execute first express and get object from it.
const appPractiseSet = express();

//Now we will write middleware as requested, below two are dummy middleware as requested.

appPractiseSet.use((req, res, next) => {
  console.log('Inside the First Dummy middleware.', req.url, req.method);
  next();
});

appPractiseSet.use((req, res, next) => {
  console.log('Inside the Second Dummy middleware.', req.url, req.method);
  next();
});

//Adding third middleware as request to send response.
appPractiseSet.use((req, res, next) => {
  console.log('Inside the Third Dummy middleware.', req.url, req.method);
  res.send('<h1>Welcome to Practise Set.</h1>');
});

//Now we will start and listen server using express object.
const PORT = 3000;
appPractiseSet.listen(PORT, () => {
  console.log(`Server is stated and listing on http://localhost:${PORT}`);
});