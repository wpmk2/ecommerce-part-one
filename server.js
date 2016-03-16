// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

// Controllers
var userCtrl = require('./server/controllers/userCtrl.js');
var productCtrl = require('./server/controllers/productCtrl.js');
var orderCtrl = require('./server/controllers/orderCtrl.js');
var cartCtrl = require('./server/controllers/cartCtrl.js');

// Express
var app = express();

// Middleware
app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(cors());

// Endpoints
app.get('/products', productCtrl.getProducts);
app.post('/products', productCtrl.postProduct);
app.put('/products/:id', productCtrl.putProduct);
app.delete('/products/:id', productCtrl.removeProduct);

app.get('/user', userCtrl.getUser);
app.post('/user', userCtrl.postUser);

app.get('/orders', orderCtrl.getOrders);
app.get('/orders/:id', orderCtrl.getOrder);
app.post('/orders', orderCtrl.addOrder);
app.put('/orders/:id', orderCtrl.editOrder);

app.post('/cart', cartCtrl.postCart);
app.put('/cart/:id', cartCtrl.addItem); //user_id, not cart

// Connections
var port = 9001;
var mongoUri = 'mongodb://localhost/products';

mongoose.set('debug', true);
mongoose.connect(mongoUri, function(err) {
    console.log(err);
    if (err) throw err;
});
mongoose.connection.once('open', function() {
  console.log('connected to mongoDB at: ', mongoUri);
});

app.listen(port, function() {
  console.log('Listening on port ', port);
});

module.exports = app;