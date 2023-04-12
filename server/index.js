const express = require('express');
const mysql = require('mysql')
const cors = require("cors");

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'PRACTICE',
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  

app.post("/register", (req,res)=>{

    const username = req.body.username;
    const password = req.body.password;


    db.query("INSERT INTO USERS (username, password) VALUES (?,?)", 
    [username, password], 
    (err, result) => { 
        console.log(result);
        console.log(err)
    }
    );
});


app.post("/login", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;


    db.query("SELECT * FROM USERS WHERE username = ? AND password =?", 
    [username, password], 
    (err, result) => { 
        if (err){
        res.send({err: err});
        } 
            if (result.length > 0) {
                res.send(result)
            } else{
                res.send({message: "username or password invalid"});
            }
    }
    );

});

app.listen(3002, ()=>{
    console.log("server running");
});