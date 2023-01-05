const mysql = require("mysql2");

const connectionConfig = {
  host: "db",
  user: "root",
  password: "root",
  database: "bloodbankmanagementdb",
};

const connection = mysql.createConnection(connectionConfig);
connection.query(
  `CREATE TABLE IF NOT EXISTS users (
        uid VARCHAR(100) PRIMARY KEY NOT NULL UNIQUE,
        fullname VARCHAR(50) NOT NULL UNIQUE,
        username VARCHAR(25) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL,
        bloodType VARCHAR(10) NOT NULL,
        address VARCHAR(100) NOT NULL,
        contact_number VARCHAR(30) NOT NULL,
        gender INT NOT NULL,
        age INT NOT NULL,
        weight INT NOT NULL,
        height INT NOT NULL
    )`,
  (err: any) => {
    if (err) {
      return console.log(err);
    }
    return console.log("USERS TABLE IS SET");
  }
);

connection.query(
  `CREATE TABLE IF NOT EXISTS admin (admin_id VARCHAR(100) PRIMARY KEY UNIQUE NOT NULL,username VARCHAR(45) DEFAULT NULL, fullname varchar(100) DEFAULT NULL,password VARCHAR(100) DEFAULT NULL,contact_number VARCHAR(100) DEFAULT NULL,address VARCHAR(100) DEFAULT NULL)`,
  (err: any) => {
    if (err) {
      return console.log(err);
    }
    return console.log("ADMIN TABLE IS SET");
  }
);

module.exports = connection;
