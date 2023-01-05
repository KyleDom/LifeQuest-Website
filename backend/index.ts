const userRoutes = require("./routes/userRoutes");

import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
const db = require("./database");

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

db.connect((err: Error) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database!");
});

app.use("/user", userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port 3000`);
});