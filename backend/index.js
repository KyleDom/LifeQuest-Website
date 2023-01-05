<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRoutes = require("./routes/userRoutes");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db = require("./database");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Connected to database!");
});
app.use("/user", userRoutes);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port 3000`);
=======
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require("cors");

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'bloodbankmanagementdb'
});


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))



app.post('/api/insert',(req,res, next)=>{

  const username = req.body.username
  const password = req.body.password
  const fullName = req.body.fullName
  const address = req.body.address
  const gender = req.body.gender
  const age = req.body.age
  const weight = req.body.weight
  const height = req.body.height
  const mobileNumber = req.body.mobileNumber

  const sqlInsert =`INSERT INTO user (username, password, fullName, address, gender, age, weight, height, mobileNumber) 
  VALUES ( "${username}" , "${password}", "${fullName}", "${address}", "${gender}", "${age}", "${weight}", "${height}", "${mobileNumber}")` // needed bloodtype
  db.query(sqlInsert,function(error,result) {
    if(error) {
        throw error
    } else {
        
    }
  })
});

app.get('/',(req,res)=>{
});


app.listen(3002,()=>{
    console.log('running on port 3002')
>>>>>>> c6d4d665b002ed021c379a1b47c2884eb2bffc98
});
