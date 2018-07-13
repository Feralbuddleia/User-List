const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');
const fs = require('fs');
const mongoose = require('mongoose');
const { conn_str, port } = require('../config');


const logDir = path.join(__dirname, './', 'logs');
fs.existsSync(logDir) || fs.mkdirSync(logDir);

const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: logDir
});

mongoose.connect(conn_str, { useNewUrlParser: true });


app.use(morgan('combined', {stream: accessLogStream}));
app.use(bodyParser.json());

require('./route')(app);

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});


