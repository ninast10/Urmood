require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const connection = require('./database.js');
//const mysql = require('mysql');
//const db = require('./connection');
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

//GET all tips
app.get('/:tips', (req, res) => {
     res.send({
        data: {
            tips: 'Open, accepting, and loving toward yourself and what you are going through, consider a simple exercise such as wallk, try something new, accept and validate your emotions, and getting enough sleep'
        }
     });
});


//GET tips by Id
app.get('/tips/1', (req, res) => {
    res.send({
       data: {
           tips: 'Recognize and appreciate your goals achievement'
       }
    });
});

app.get('/tips/2', (req, res) => {
    res.send({
       data: {
           tips: 'Do something that is pleasurable or meaningful'
       }
    });
});

app.get('/tips/3', (req, res) => {
    res.send({
       data: {
           tips: 'Listen to your favorite music'
       }
    });
});

app.get('/tips/4', (req, res) => {
    res.send({
       data: {
           tips: 'Spending time in nature'
       }
    });
});

app.get('/tips/5', (req, res) => {
    res.send({
       data: {
           tips: 'Writing or journaling about what you are experiencing'
       }
    });
});


//GET aerticle by Id
app.get('/article/1', (req, res) => {
    res.send({
        data: {
            article: 'https://scholarworks.calstate.edu/downloads/5712mc40c'
        }
     });
});

app.get('/article/2', (req, res) => {
    res.send({
        data: {
            article: 'https://pdfs.semanticscholar.org/1e57/098b398a70ea7f965af43e02e9e78fa4c1b0.pdf'
        }
     });
});

app.get('/article/3', (req, res) => {
    res.send({
        data: {
            article: 'https://onlinelibrary.wiley.com/doi/10.1002/mhw.31471'
        }
     });
});

app.get('/article/4', (req, res) => {
    res.send({
        data: {
            article: 'https://academic.oup.com/pcm/article/3/3/161/5861360'
        }
     });
});

app.get('/article/5', (req, res) => {
    res.send({
        data: {
            article: 'https://www.jahonline.org/action/showPdf?pii=S1054-139X%2818%2930479-8'
        }
     });
});



//GET the counselling service contact by Id
app.get('/contact/1', (req, res) => {
    res.send({
        data: {
            contact: 'https://cmlabs.co/id-id/promo/free-consultation-benefit'
        }
     });
});

app.get('/contact/2', (req, res) => {
    res.send({
        data: {
            contact: 'http://www.brainfit.co.id/free-consultation-2/'
        }
     });
});

app.get('/contact/3', (req, res) => {
    res.send({
        data: {
            contact: 'https://hopeforhealingfoundation.org'
        }
     });
});

app.get('/contact/4', (req, res) => {
    res.send({
        data: {
            contact: 'https://www.aeccglobal.co.id/id/contact-us/'
        }
     });
});

app.get('/contact/5', (req, res) => {
    res.send({
        data: {
            contact: 'https://www.ibunda.id/'
        }
     });
});
