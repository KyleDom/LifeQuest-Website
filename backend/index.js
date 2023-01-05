"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mysql_1 = __importDefault(require("mysql"));
const db = require("./database");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8000 || process.env.PORT;
exports.db = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "se2121",
    database: "bloodbankmanagementdb",
});
db.connect(e => {
    if (e) {
        throw e;
    }
    console.log("connected to db");
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
db.connect((err) => {
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
const port = process.env.PORT || 8000;
