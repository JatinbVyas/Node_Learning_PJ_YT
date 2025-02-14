const sumRequestHandler = (req, res) => {
  console.log('1. In Sum handler.');
  const body = [];
  let addition;
    /* req.on means whenever first request is received and chunk data is received pushing it to array object
          body. 
        */
    req.on("data", (chunk) => {
      console.log('2. Chunk came.');
      console.log(chunk);
      body.push(chunk);
    });

    /*req.end means request is end full data is received so from body we are concatinatig data using Buffer
          object and converting it to toString(). and finally print it to console.
        */
    req.on("end", () => {
      console.log('3. Event ended.');
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
      
      //Below is the traditional addition
      // let number1 = finalDataObject["number1"];
      // let number2 = finalDataObject["number2"];

      // console.log("Number 1 is: " + number1);
      // console.log("Number 2 is: " + number2);

      // let addition = Number(number1) + Number(number2);

      /* Another way to addition */
      addition = Number(finalDataObject.number1) + Number(finalDataObject.number2);
      console.log(`Sum of two numbers is:: ${addition}`);
    });

    console.log('4. Sending response.');
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Calculator</title></head>");
    res.write("<body><h1>Welcome !!!</h1>");
    res.write(`<h1> Your result is ${addition} </h1>`);
    res.write("</body>");
    res.write("</html>");
    return res.end();
}

module.exports = sumRequestHandler;