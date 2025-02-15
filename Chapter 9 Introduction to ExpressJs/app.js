// Core module
const http = require('http');

//External module
const express = require('express');

// Internal module
const requestHandler = require('./fileSquence');

//Execute expressJs
const appExpressIntro = express();

/*appExpressIntro.Use methos used for register a middleware and handle the req and res.
  Earlier same as requesthandler. In simple Node this was used to write in createServer method but
  here in ExpressJs req and res handles in middleware using Use method.
  next() => this function use to move cursor or execution pointer to next immediate registerd middleware.
  here is case second middleware.
*/
appExpressIntro.use((req, res, next) => {
  console.log('This is first middleware. ', req.url, req.method);
  next();
});

appExpressIntro.use((req, res, next) => {
  console.log('This is second middleware. ', req.url, req.method);
});

const server = http.createServer(appExpressIntro);

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});