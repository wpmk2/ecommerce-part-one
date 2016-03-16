var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  Title: { type: String, unique: true, required: true, index: true },
  Price: { type: Number, required: true, min: 0 },
  Description: { type: String, required: true }
});

// module.exports = mongoose.model('Product', productSchema);
module.exports = productSchema;
 