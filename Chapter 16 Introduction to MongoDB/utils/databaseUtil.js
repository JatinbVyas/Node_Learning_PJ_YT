const mysql = require('mysql2');

const mysqlPool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Mysql321$',
  database: 'airbnbhome'
});

module.exports = mysqlPool.promise();