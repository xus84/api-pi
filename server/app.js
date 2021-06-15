const { config } = require('dotenv');
const express = require('express')
const morgan = require('morgan')
require('dotenv').config();
config();


const app = express();

app.set('port', process.env.API_PORT)

app.use(morgan('dev'));

app.use(require('./routes/products.routes'))
    
module.exports = app;