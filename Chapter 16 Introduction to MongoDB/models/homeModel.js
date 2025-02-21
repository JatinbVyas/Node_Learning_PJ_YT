const { ObjectId } = require("mongodb");
const { getdb } = require("../utils/databaseUtil");




module.exports = class HomeClass {
  constructor(id, houseName, price, location, rating, photoUrl, description) {
    this._id=id;
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  //Define function to save/push home object.
  saveHome() {
    console.log('value of id is::', this);
    if(this._id){ //this is update case.
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.rating,
        photoUrl: this.photoUrl,
        description: this.description
      };
      const db = getdb();
      return db.collection("homes").updateOne({_id: new ObjectId(String(this._id))}, {$set: updateFields});
    }
    else{
      const db = getdb();
      return db.collection("homes").insertOne(this);
    }
    
  }

  static fetchAll() {
    const db = getdb();
    return db.collection("homes").find().toArray();
  }

  static findHomeByid(homeId) {
    const db = getdb();
    return db.collection("homes").find({_id: new ObjectId(String(homeId))}).next();
  }

  static deleteHomeByid(homeId) {
    const db = getdb();
    return db.collection("homes").deleteOne({_id: new ObjectId(String(homeId))});
  }
};
