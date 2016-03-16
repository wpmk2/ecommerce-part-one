var mongoose = require('mongoose'),
  productSchema = require('../models/Product'),
  Product = mongoose.model('Product', productSchema);

module.exports = {

  getProducts: function (req, res) {
    console.log(Product);
    Product.find(function (err, result) {
      if (err) {
        res.status(500).json(err);
      } else {
        console.log('got items');
        res.json(result);
      }
    })
  },

  postProduct: function (req, res) {
    var newProduct = req.body;
    Product.create(newProduct, function (err, result) {
      if (err) {
        res.status(500).json(err);
      } else {
        console.log('item to be added: ', req.body);
        res.json(result);
      }
    })
  },

  putProduct: function (req, res) {
    console.log('id: ', req.params.id);
    console.log('item to be updated: ', req.body);
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, results) {
      if (!err) {
        console.log(results);
        res.status(200).end()
      }
    })
  },

  removeProduct: function (req, res) {
    console.log('id: ', req.params.id);
    console.log('item to be removed: ', req.body);
    Product.findByIdAndRemove(req.params.id, function (err, results) {
      if (!err) {
        console.log(results);
        res.status(200).end()
      }
    })
  }
}