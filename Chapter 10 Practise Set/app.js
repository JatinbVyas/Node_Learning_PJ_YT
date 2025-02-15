//import external module for express.
const express = require('express');

//Core module
const path = require('path');

//Internal module
const contactUSRouter = require('./routes/contactUs');
const rootDir =  require('./utils/pathUtil');

//now execute first express and get object from it.
const appPractiseSet = express();

appPractiseSet.use(express.urlencoded());

appPractiseSet.use(contactUSRouter);

appPractiseSet.use((req, res, next) => {
  console.log('inside 404');
  res.status(404).sendFile(path.join(rootDir,"views","404NotFound.html"));
})

//Now we will start and listen server using express object.
const PORT = 3000;
appPractiseSet.listen(PORT, () => {
  console.log(`Server is stated and listing on http://localhost:${PORT}`);
});