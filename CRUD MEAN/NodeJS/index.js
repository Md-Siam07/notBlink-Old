const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
var teacherController = require('./controllers/teacherController')

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:58940' }));

app.listen(3000, () => console.log('server started at port: 3000'));

app.use('/teachers', teacherController); 