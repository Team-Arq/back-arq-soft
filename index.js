const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const apiRouter = require('./0 - Distributed Services/api');

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Serve listen on port: ' + port);
})
