var mysql = require("mysql2");
var connectionConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "blood_donation_db"
};
module.exports = mysql.createConnection(connectionConfig);
