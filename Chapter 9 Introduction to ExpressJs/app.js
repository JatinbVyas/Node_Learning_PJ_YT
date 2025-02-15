// Core module
const http = require('http');

//External module
const express = require('express');

// Internal module
const requestHandler = require('./fileSquence');

//Execute expressJs
const appExpressIntro = express();

const server = http.createServer(appExpressIntro);

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});