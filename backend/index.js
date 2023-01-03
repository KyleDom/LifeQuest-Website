"use strict";
exports.__esModule = true;
var userRoutes = require("./routes/userRoutes");
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var cors_1 = require("cors");
// import mysql from "mysql";
var db = require("./database");
dotenv_1["default"].config();
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
db.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("Connected to database!");
});
app.use("/user", userRoutes);
/* app.get('/', (req: Request, res: Response) => {
  res.json({user: ["kyle", "dominic"]})
});

app.get('/bloodbank', (req: Request, res: Response) => {
  res.json({blood: ["A", "B"]})
});

app.get('/login', (req: Request, res: Response) => {
  res.json({login: ["user1", "user2"]})
});

app.get('/team', (req: Request, res: Response) => {
  res.json({user: ["kyle", "dominic"]})
});

const db = mysql.createConnection({
  host : 'localhost',
  user : 'admin',
  password : '',
  database : ''
}) */
var port = process.env.PORT || 8000;
app.listen(port, function () {
    console.log("listening on port ".concat(port));
});
