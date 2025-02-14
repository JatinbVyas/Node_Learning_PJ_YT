const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url === "/"){
    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
  <head>
    <title>Welcome to Myntra</title>
  </head>
  <body>
    <head>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </nav>
    </head>
  </body>
</html>
      `);
  return res.end();
  }
else if(req.url === "/home"){
  res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Welcome to Myntra</title></head>
        <body><h1>Welcome to Home</h1></body>
      </html>
      `);
      return res.end();
}
else if(req.url === "/men"){
  res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Welcome to Myntra</title></head>
        <body><h1>Welcome to Men</h1></body>
      </html>
      `);
      return res.end();
}
else if(req.url === "/women"){
  res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Welcome to Myntra</title></head>
        <body><h1>Welcome to Women</h1></body>
      </html>
      `);
      return res.end();
}
else if(req.url === "/kids"){
  res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Welcome to Myntra</title></head>
        <body><h1>Welcome to Kids</h1></body>
      </html>
      `);
      return res.end();
}
else if(req.url === "/cart"){
  res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
        <head><title>Welcome to Myntra</title></head>
        <body><h1>Welcome to Cart</h1></body>
      </html>
      `);
      return res.end();
}
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});