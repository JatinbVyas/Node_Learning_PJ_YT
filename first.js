console.log('Best of Luck');

const fs = require('fs');

fs.writeFile('output.txt', 'Writing File', (err) => {
  if(err) console.log('There is some error.');
  else console.log('File written successfully.');
});