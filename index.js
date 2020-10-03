const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var cors = require('cors');

const apiRouter = require('./0 - Distributed Services/api');

const app = express();

app.use(cors());

app.use(cookieParser());
app.use(session({
    secret: 's3Cur3',
    resave: false,
    saveUninitialized: true
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.use(cookieParser());
app.use(session({
    secret: 's3Cur3',
    resave: true,
    saveUninitialized: true
}));



let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Serve listen on port: ' + port);
})



