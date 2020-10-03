const express = require('express'), cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
var cors = require('cors');

const apiRouter = require('./0 - Distributed Services/api');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Serve listen on port: ' + port);
})
