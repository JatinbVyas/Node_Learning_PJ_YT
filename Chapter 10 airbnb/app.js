const express = require('express');

const appAirbnb = express();

//Now start and listen server.
const PORT = 3000;
appAirbnb.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});