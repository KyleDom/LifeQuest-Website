
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import mysql from 'mysql2'
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
app.listen(port, function () {
  console.log(`App is listening on port ${port} !`)
}) 

