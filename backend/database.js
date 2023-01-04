"use strict";
const mysql = require("mysql2");
const connectionConfig = {
    host: "localhost",
    user: "root",
    password: "PhoenAndNix102301",
    database: "bloodbankmanagementdb",
};
const connection = mysql.createConnection(connectionConfig);
connection.query(`CREATE TABLE IF NOT EXISTS users (
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
    )`, (err) => {
    if (err) {
        return err;
    }
    return console.log("TABLE IS SET");
});
module.exports = connection;
