// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var db = mongojs('commerceDB', ['products']);

// Controllers
var productCtrl = require('./server/controllers/productCtrl.js');

// Express
var app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.get('/products', productCtrl.getProducts);
app.post('/products', productCtrl.postProduct);
app.put('/products/:id', productCtrl.putProduct);
app.delete('/products/:id', productCtrl.removeProduct);

// Connections
var port = 9001;
// var mongoUri = 'mongodb://localhost:27017/ecommerce-site';

app.listen(port, function() {
  console.log('Listening on port ', port);
});

module.exports = app;