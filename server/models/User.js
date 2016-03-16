var mongoose = require('mongoose');
var Cart = require('./Cart');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  email: { type: String, required: true, lowercase: true, index: true, unique: true},
  cart: [{ type: Schema.Types.ObjectId, ref: 'Cart'}],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
});

userSchema.pre('save', function(next) {
  this.cart.updated = new Date();
  next();
});

module.exports = mongoose.model('User', userSchema);
// module.exports = userSchema;