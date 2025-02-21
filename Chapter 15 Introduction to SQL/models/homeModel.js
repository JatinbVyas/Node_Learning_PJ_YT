const homeDB = require('../utils/databaseUtil');

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
    
  }

  static fetchAll() {
    return homeDB.execute("SELECT * FROM homes");
    
    /**
     * Above first homeDB variable is defined to call database pool from databaseUtil file.
     * Next is below query written to get all rows from particular table or query.
     * Here ([rows, Fields]) is format of destructure the array, and we are printing only rows in while our final data is capture.
     * in fields table description is defined or we can say column description is defined.
     * instead of destructure we can use any variable directily e.g result and print it to get both rows and fields.
     * DB result::  [
  {
    id: 1,
    houseName: 'Honyvills',
    price: 5555,
    location: 'Goa',
    rating: 4.5,
    photoUrl: '/images/house1.jpg',
    description: 'This is honeymoon home'
  }
]
     */
    // homeDB.execute("SELECT * FROM homes").then(([rows, Fields]) => {
    //   console.log('DB result:: ', rows);
    // }).catch(error => {
    //   console.log('There is an error while db query.', error);
    // });

  }

  static findHomeByid(homeId, callback) {
    
  }

  static deleteHomeByid(homeId, callback) {
    
  }


}