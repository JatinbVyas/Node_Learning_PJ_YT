// Core module
const http = require('http');

//Internal Module
const testingSyntax = require('./syntax');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testingSyntax();
});

const port = 3001;

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});