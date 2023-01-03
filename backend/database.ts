const mysql = require("mysql2");

const connectionConfig = {
    host: "localhost", 
    user: "root",
    password: "root",
    database: "blood_donation_db",
};

module.exports = mysql.createConnection(connectionConfig);