// Core Module

const http = require ('http');

// Server is created using below create server function.
const server = http.createServer((req,res) => {
  console.log(req);
  process.exit(); //Stops the server.
});
// End server creation.

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});