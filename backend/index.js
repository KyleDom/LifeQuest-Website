const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require("cors");

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'realme',
    database:'bloodbankmanagementdb'
});


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))



app.post('/api/insert',(req,res)=>{

  const username = req.body.username
  const password = req.body.password
  const fullName = req.body.fullName
  const address = req.body.address
  const gender = req.body.gender
  const age = req.body.age
  const weight = req.body.weight
  const height = req.body.height
  const mobileNumber = req.body.mobileNumber

  const sqlInsert ="INSERT INTO user (username, password, fullName, address, gender, age, weight, height, mobileNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  db.query(sqlInsert,[username, password, fullName, address, gender, age, weight, height,mobileNumber],(err,result)=>{
    
    console.log(result)
  })
});

app.get('/',(req,res)=>{
});


app.listen(3002,()=>{
    console.log('running on port 3002')
});