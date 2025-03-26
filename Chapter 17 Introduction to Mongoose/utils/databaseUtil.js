const mongoDb = require("mongodb");

const mongoClient = mongoDb.MongoClient;

const mongo_URL =
  "mongodb+srv://jatinmongo:jatinmongo321$@jackmongo.x0ybk.mongodb.net/?retryWrites=true&w=majority&appName=JackMongo";

let _db;
const mongoConnect = (callback) => {
  mongoClient
    .connect(mongo_URL)
    .then((client) => {
      _db = client.db('airbnbhomes');
      callback();
    })
    .catch((error) => {
      console.log("Error while conneciting mongoDB: ", error);
    });
};

const getdb = () => {
  if(!_db){
    throw new Error('Mongo is not connected.');
  }
  else{
    return _db;
  }
}

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;

// const mysql = require('mysql2');

// const mysqlPool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Mysql321$',
//   database: 'airbnbhome'
// });

// module.exports = mysqlPool.promise();
