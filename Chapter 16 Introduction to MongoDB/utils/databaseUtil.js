const mongoDb = require("mongodb");

const mongoClient = mongoDb.MongoClient;

const mongo_URL =
  "mongodb+srv://jatinmongo:jatinmongo321$@jackmongo.x0ybk.mongodb.net/?retryWrites=true&w=majority&appName=JackMongo";

const mongoConnect = (callback) => {
  mongoClient
    .connect(mongo_URL)
    .then((client) => {
      console.log(client);
      callback(client);
    })
    .catch((error) => {
      console.log("Error while conneciting mongoDB: ", error);
    });
};

module.exports = mongoConnect;

// const mysql = require('mysql2');

// const mysqlPool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Mysql321$',
//   database: 'airbnbhome'
// });

// module.exports = mysqlPool.promise();
