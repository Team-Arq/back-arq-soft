const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./0 - Distributed Services/routes/api');

const app = express();

require('./3 - Infrastructure/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Serve listen on port 3000');
})