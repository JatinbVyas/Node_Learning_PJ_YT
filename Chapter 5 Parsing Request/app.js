// Core module
const http = require('http');

// Internal module
const requestHandler = require('./user');

const server = http.createServer(requestHandler);

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});