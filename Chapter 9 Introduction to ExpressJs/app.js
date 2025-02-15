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

  Now we can handles the routes using specific methods like get or post.
  Below we used get for path "/", so now this is not wildcard match, this will not execute everytime.
  If someone called for directly "/submit-details" then only that middleware will execute because
  "/" path middleware is now written with get method.

  As we seen earlier when path is mentiond with use method it means that will not check for exact request with method.
*/
appExpressIntro.get("/", (req, res, next) => {
  console.log('This is first middleware. ', req.url, req.method);
  //res.send('Welcome to ExpressJs');
  next();
});

/**
 * Here we replaced use with post, means now only post request with URL "/submit-details" comes then and then
 * only this middleware will execute.
 */
appExpressIntro.post("/submit-details", (req, res, next) => {
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