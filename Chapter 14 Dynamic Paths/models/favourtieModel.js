//Core modules
const fs = require("fs");
const path = require("path");
//local module
const rootDir = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDir, "Data", "favourite.json");

module.exports = class FavouriteClass {

  static addToFavourite(homeId, callback) {
    FavouriteClass.getFavourites((favouriteHomes) => {
      // includes method used to check given id is exist or not in Array.
      if (favouriteHomes.includes(homeId)) {
        callback("Given home is already exists in Favourite list.");
      } else {
        favouriteHomes.push(homeId);
        fs.writeFile(
          favouriteDataPath,
          JSON.stringify(favouriteHomes),
          callback
        );
      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static removeFavouriteHomeByid(homeId, callback) {
    this.getFavourites((listofHomes) => {
      listofHomes = listofHomes.filter((home) => !home.includes(homeId));
      fs.writeFile(favouriteDataPath, JSON.stringify(listofHomes), callback);
    });
  }
};
