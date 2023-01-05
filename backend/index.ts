
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import mysql from 'mysql2'
import { db } from "./routes/db-config";
const cookie = require('cookie-parser')
dotenv.config();
const app = express();
const port = 8000 || process.env.PORT

db.connect(e => {
  if(e){
    throw e
  }
})
app.use(cookie)
app.use(express.json());
app.use('/api', require('./controllers/app'))
app.listen(port)
app.use(cors());


