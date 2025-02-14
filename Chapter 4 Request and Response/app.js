const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //Sending response to client/browser as html
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node Server</title></head>');
    res.write('<body><h1>Welcome to home</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url === '/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node Server</title></head>');
    res.write('<body><h1>Checkout our products</h1></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Node Server</title></head>');
  res.write('<body><h1>Hello First ever response.</h1></body>');
  res.write('</html>');
  res.end();
})

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});