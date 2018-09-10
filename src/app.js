'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./models');

const app = express();
const router = express.Router();

// Carregar os Models
//const Service = require('./models/service');

// Carregar as Rotas
const indexRoute = require('./routes/index-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', indexRoute);
app.use('/swagger-ui.html', express.static(__dirname + '/public/api-docs'));

require('./public/swagger')(app);
module.exports = app;