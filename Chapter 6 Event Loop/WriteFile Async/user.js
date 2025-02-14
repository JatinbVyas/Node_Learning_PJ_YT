const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  //Sending response to client/browser as html
  if(req.url === '/'){
    console.log('0. Inside home.');
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

    console.log('1. in submit details post.');
    const body = [];
    /* req.on means whenever first request is received and chunk data is received pushing it to array object
      body. 
    */
    req.on("data", chunk => {
      console.log('2. Chunk came');
      console.log(chunk);
      body.push(chunk);
    });

    /*req.end means request is end full data is received so from body we are concatinatig data using Buffer
      object and converting it to toString(). and finally print it to console.
    */
    req.on("end", () => {
      console.log('3. Event ended');
      const fullBodyData = Buffer.concat(body).toString();
      console.log(fullBodyData);
      /* Now from data in one string format to converting in meaningfull json object.
        For this I am using URLSearchParams and then traversing them in for loop and storing value in final
        json object.
      */
      const params = new URLSearchParams(fullBodyData);
      // const finalDataObject = {};
      // for(const [key, value] of params.entries()){
      //   finalDataObject[key] = value;
      // }
      const finalDataObject = Object.fromEntries(params); //This is another way instead of above for loop.
      console.log(finalDataObject);

      // Writing now dynamic data to file
      fs.writeFileSync('user.txt', JSON.stringify(finalDataObject));
    });
    console.log('4. redirect to 302');
    res.statusCode = 302;
    res.setHeader('Location','/');
    return res.end();
  }
  console.log('5. out side of submit details.');
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Node Server</title></head>');
  res.write('<body><h1>Hello First ever response.</h1></body>');
  res.write('</html>');
  res.end();
}

module.exports = userRequestHandler;