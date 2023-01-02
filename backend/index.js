"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql_1 = __importDefault(require("mysql"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.json({ user: ["kyle", "dominic"] });
});
app.get('/bloodbank', (req, res) => {
    res.json({ blood: ["A", "B"] });
});
app.get('/login', (req, res) => {
    res.json({ login: ["user1", "user2"] });
});
app.get('/team', (req, res) => {
    res.json({ user: ["kyle", "dominic"] });
});
const db = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'admin',
    password: '',
    database: ''
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
