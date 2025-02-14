const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === '/home'){
    res.write('<h1>Welcome to home</h1>');
    return res.end();
  }
  else if(req.url === '/men'){
    res.write('<h1>Welcome to Men</h1>');
    return res.end();
  }
  else if(req.url === '/women'){
    res.write('<h1>Welcome to Women</h1>');
    return res.end();
  }
  else if(req.url === '/kids'){
    res.write('<h1>Welcome to Kids</h1>');
    return res.end();
  }
  else if(req.url === '/cart'){
    res.write('<h1>Welcome to Cart</h1>');
    return res.end();
  }
  res.write(`
    <html>
  <head>
    <title>First Node Server</title>
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

    res.end();
});

server.listen(3000, () => {
  console.log('Server is running on address http://localhost:3000');
});