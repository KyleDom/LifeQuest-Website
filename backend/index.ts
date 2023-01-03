const userRoutes = require("./routes/userRoutes");
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import mysql from "mysql";
const db = require("./database");

dotenv.config();

const app: Express = express();

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

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
