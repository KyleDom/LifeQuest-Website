import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import mysql from 'mysql2'
dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({ user: ["kyle", "dominic"] })
});

app.get('/bloodbank', (req: Request, res: Response) => {
  res.json({ blood: ["A", "B"] })
});

app.get('/login', (req: Request, res: Response) => {
  res.json({ login: ["user1", "user2"] })
});

app.get('/team', (req: Request, res: Response) => {
  res.json({ user: ["kyle", "dominic"] })
});


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});
