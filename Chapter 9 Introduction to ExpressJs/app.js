//External module
const express = require('express');

// Internal module
const requestHandler = require('./fileSquence');

//Execute expressJs
const appExpressIntro = express();

/** appExpressIntro.Use methos used for register a middleware and handle the req and res.
  Earlier same as requesthandler. In simple Node this was used to write in createServer method but
  here in ExpressJs req and res handles in middleware using Use method.
  next() => this function use to move cursor or execution pointer to next immediate registerd middleware.
  here is case second middleware.
  * Now we can add path matching also in use method.  as used in below "/" or "/submit-details".
  "/" means it match everytime, this is like * matches everything, when used with use method.

  can not send response after once you send response in one of the middleware.
*/
appExpressIntro.use("/", (req, res, next) => {
  console.log('This is first middleware. ', req.url, req.method);
  //res.send('Welcome to ExpressJs');
  next();
});

appExpressIntro.use("/submit-details", (req, res, next) => {
  console.log('This is second middleware. ', req.url, req.method);
  res.send('Welcome to ExpressJs Introduction chapter.'); // This is for sending response to client.
});

const port = 3000;

/** Now we removed create server line and directly appExpressIntro object is start listen to server.
 * So internally this is creating server and then start listing.
 */
appExpressIntro.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});