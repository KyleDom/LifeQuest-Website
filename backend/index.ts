
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import mysql from "mysql";
const db = require("./database");

dotenv.config();
const app = express();
const port = 8000 || process.env.PORT



export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "se2121",
    database: "bloodbankmanagementdb", 
})
db.connect(e => {
  if(e){
    throw e
  } console.log("connected to db")
})
app.use(cors());
app.use(express.json());
app.use(cors());

db.connect((err: Error) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database!")
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

