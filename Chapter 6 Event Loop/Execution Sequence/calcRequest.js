//Internal module
const sumModule = require('./sumofNumber');

const calcyRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  //Sending response to client/browser as html
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body><h1>Welcome !!!</h1>");
    res.write('<br> <a href="/calculator"> Go to Calculator </a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body><h1>Welcome !!!</h1>");
    res.write(`
      <form action="/calculate-result" method="POST">
        <input type="text" id="number1" name="number1" placeholder="Enter first number"><br><br>
        <input type="text" id="number2" name="number2" placeholder="Enter second number"><br><br>
        <br><br><input type="submit" value="Sum">
      </form>
    `);
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    return sumModule(req, res);
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Page not found.</title></head>');
  res.write('<body><h1>404 Your page is not found.</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = calcyRequestHandler;
