//Core modules
const fs = require('fs');
const path = require('path');
//local module
const rootDir = require('../utils/pathUtil');

module.exports = class HomeClass {

  constructor(houseName, price, location, rating, photoUrl){
    this.id = Math.random().toString();
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  //Define function to save/push home object.
  saveHome () {
    HomeClass.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir,'Data','home.json');
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
        console.log('File writing successfull', error);
      })
    });
    
  }

  /**
   * 
   * @param {*} callback 
   * Here callback is used for async operation.
   * readFile function is Async function, before it complete exectuion pointer will get return, where fetchAll is called.
   * And due to this it will not give any result and will give result.
   * So callback comes in picture, using callback, once read operation is complete and it will get return to position where
   * fetchAll is called.
   * In fetchAll called position also syntax is changed.
   */
  static fetchAll(callback)
  {
    const homeDataPath = path.join(rootDir,'Data','home.json');
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);      
    });
  }

}