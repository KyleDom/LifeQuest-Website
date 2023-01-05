"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql2_1 = __importDefault(require("mysql2"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const db = mysql2_1.default.createConnection({
    user: "root",
    host: "localhost",
    password: "se2121",
    database: "bloodbankmanagementdb"
});
db.connect((err) => {
    if (err)
        throw err;
    console.log("database connected");
});
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO user (username, password) VALUES (?,?)", [username, password], (err, result) => {
        console.log(err);
    });
});
const port = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log(`listening on port ${port}`);
});
