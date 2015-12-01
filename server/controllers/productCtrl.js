var mongojs = require('mongojs');
var db = mongojs('commerceDB', ['products']);

module.exports = {
  getProducts: function (req, res) {
    db.products.find(function (err, result) {
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
    // newProduct.save(function(err, result){
    db.products.insert(newProduct, function (err, result) {
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
    db.products.update({ _id: mongojs.ObjectId(req.params.id) }, { $set: req.body }, function (err, results) {
      console.log(results);
      res.status(200).end()
    })
  },
  
  // Recognize that in reality, a product will probably not be removed
  // from the database. It will likely be archived. But, this works
  // in our simple case to demonstrate how to remove a document
  // from the database.
  removeProduct: function (req, res) {
    console.log('id: ', req.params.id);
    console.log('item to be removed: ', req.body);
    db.products.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, results) {
      if (!err) {
        console.log(results);
        res.status(200).end()
      }
    })
  }
}