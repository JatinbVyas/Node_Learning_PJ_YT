const { getdb } = require("../utils/databaseUtil");

module.exports = class HomeClass {
  constructor(id, houseName, price, location, rating, photoUrl, description) {
    this.id = id;
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  //Define function to save/push home object.
  saveHome() {
    const db = getdb();
    return db.collection("homes").insertOne(this);
  }

  static fetchAll() {
  }

  static findHomeByid(homeId) {
  }

  static deleteHomeByid(homeId) {
  }
};
