const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./0 - Distributed Services/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.listen(80, () => {
    console.log('Serve listen on port 3000');
})
