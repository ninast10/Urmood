require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database.js');
//const mysql = require('mysql');
const db = require('./connection');
//const response =require('./response');

app.use(bodyParser.json());
app.use(express.json());
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`app listening in port ${port}`);
});


app.get('/', (req, res) => {
    res.send( "connect");
});

// const pool = mysql.createConnection({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
// });

//GET all tips ramdomly
app.get('/tips/:alltips', (req, res) => {
    const sql = "SELECT * FROM tipstips order by rand()";
    db.query(sql, [req.params.tipstips], (error, result) => {
       if (result == 0) {
        res.send({status: 'not found'});
       } else{
        res.send(result);
       }
    });
});

//GET the tips by Id
app.get('/tips/:Id', (req, res) => {
    const sql = "SELECT * FROM tipstips Where Id = ?";
    db.query(sql, [req.params.Id], (error, result) => {
       if (result == 0) {
        res.send({status: 'not found'});
       } else{
        res.send(result);
       }
    });
});

//GET all solutions
app.get('/:solution', (req, res) => {
    const sql = "SELECT * FROM solution";
    db.query(sql, [req.params.solution], (error, result) => {
       if (result == 0) {
        res.send({status: 'not found'});
       } else{
        res.send(result);
       }
    });
});

//GET all the solutions by Id
app.get('/solution/:Id', (req, res) => {
    const sql = "SELECT * FROM solution Where Id = ?";
    db.query(sql, [req.params.Id], (error, result) => {
       if (result == 0) {
        res.send({status: 'not found'});
       } else{
        res.send(result);
       }
    });
});

//GET the article link by Id
app.get('/solution/article/:Id', (req, res) => {
    const sql = "SELECT article FROM solution Where Id = ?";
    db.query(sql, [req.params.Id], (error, result) => {
       if (result == 0) {
        res.send({status: 'not found'});
       } else{
        res.send(result);
       }
    });
});

//GET the consultation contact by Id
app.get('/solution/contact/:Id', (req, res) => {
    const sql = "SELECT contact FROM solution Where Id = ?";
    db.query(sql, [req.params.Id], (error, result) => {
       if (result == 0) {
        res.send({status: 'not found'});
       } else{
        res.send(result);
       }
    });
});


// app.post('/login', (req, res) => {
//     console.log({ reqfrmOut: req.body})
//     res.send('login berhasil')
// })

// app.put('/username', (req, res) => {
//     console.log({updateData: req.body})
//     res.send('update berhasil')
// })

