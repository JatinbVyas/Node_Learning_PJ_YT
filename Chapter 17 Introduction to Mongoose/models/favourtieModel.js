const { ObjectId } = require("mongodb");

module.exports = class FavouriteClass {
  static addToFavourite(homeId) {
    const db = getdb();
    return db.collection("favourites").insertOne({ homeId: homeId });
  }

  static getFavourites() {
    const db = getdb();
    return db.collection("favourites").find().toArray();
  }

  static removeFavouriteHomeByid(homeId) {
    const db = getdb();
    return db.collection("favourites").deleteOne({ homeId: homeId });
  }

  static findFavouriteHomeByid(homeId) {
    const db = getdb();
    return db.collection("favourites").find({ homeId: homeId }).next();
  }
};
