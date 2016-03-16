var mongoose = require('mongoose');
// var cartSchema = require('./Cart');
// var Cart = mongoose.model('Cart', cartSchema);
var Cart = require('./Cart');

var orderSchema = new mongoose.Schema({
  status: { type: String, enum: ['placed', 'backordered', 'shipped', 'fulfilled'], default: 'placed'},
  cart: [Cart],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
});

module.exports = mongoose.model('Order', orderSchema);