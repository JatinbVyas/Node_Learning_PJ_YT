const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  //Sending response to client/browser as html
  if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node Server</title></head>');
    res.write('<body><h1>Welcome to home</h1>');
    res.write(`
      <form action="/submit-details" method="POST">
        <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>
        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <br><br><input type="submit" value="Submit">
      </form>
      `)
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url.toLowerCase() === '/submit-details' && req.method === "POST"){
    fs.writeFileSync('user.txt','Jatin Vyas');
    res.statusCode = 302;
    res.setHeader('Location','/');
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