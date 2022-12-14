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
  const blood = req.body.blood
  const sqlInsert =`INSERT INTO user (username, password, fullName, address, gender, age, weight, height, mobileNumber, blood) 
  VALUES ("${username}", "${password}", "${fullName}", "${address}", "${gender}", "${age}", "${weight}", "${height}", "${mobileNumber}", "${blood}")`
  db.query(sqlInsert, function(err){
    if (err) { 
    } else {
      console.log("added user")
    }

  })
});

app.get('/api/get',(req,res)=>{
  const sqlselect = "SELECT blood FROM user";
  db.query(sqlselect,(err,result)=>{
    res.send(result)
  })
})

app.post('/api/login',(req,res)=>{
  const username = req.body.username
  const password = req.body.password

  db.query(`SELECT * FROM user WHERE username = '${username}'`, (err, rows, fields)=>{
    if (rows.length > 0) {
      if (rows[0]?.password === password) {
        console.log('success!');
        res.redirect('/');
      } else{
      console.log('incorrect password');
      }
  } else {
    console.log('username not found', username);
  }
})
})

app.listen(3002,()=>{
    console.log('running on port 3002')
});
