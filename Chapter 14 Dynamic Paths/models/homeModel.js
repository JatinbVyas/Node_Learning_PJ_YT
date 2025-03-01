//Core modules
const fs = require('fs');
const path = require('path');
//local module
const rootDir = require('../utils/pathUtil');
const { error } = require('console');
const FavouriteClass = require('./favourtieModel');

const homeDataPath = path.join(rootDir,'Data','home.json');

module.exports = class HomeClass {

  constructor(houseName, price, location, rating, photoUrl){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  //Define function to save/push home object.
  saveHome () {
    HomeClass.fetchAll((registeredHomes) => {
      if(this.id){ //This is edit home case
        //map method is of Array method this will itrate one by one value
        registeredHomes =  registeredHomes.map(home => {
          if(home.id === this.id){
            console.log('this is photo url comes::',this.photoUrl);
            return this;
          }
          return home;
        })
      }
      else{ //This is add home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      
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
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);      
    });
  }

  static findHomeByid(homeId, callback)
  {
    this.fetchAll(listofHomes => {
      const homeById = listofHomes.find(home => home.id === homeId);
      callback(homeById);
    });
  }

  static deleteHomeByid(homeId, callback)
  {
    this.fetchAll(listofHomes => {
      listofHomes = listofHomes.filter(home => home.id !== homeId);
      fs.writeFile(homeDataPath, JSON.stringify(listofHomes), error => {
        if(error){
          console.log('There is an error while delete home', error);
        }
        else{
          FavouriteClass.removeFavouriteHomeByid(homeId,callback);
        }
      });
    });
  }


}