var mongoose = require('mongoose'),
    User = require('../models/User'),
    Cart = require('../models/Cart');
// cartSchema = require('../models/Cart'),
// Cart = mongoose.model('Cart', cartSchema);

module.exports = {

    postCart: function (req, res) { // not currently used
        var newCart = req.body;
        Cart.create(newCart, function (err, result) {
            if (err) {
                res.status(500).json(err);
            } else {
                console.log('cart to be added: ', req.body);
                res.json(result);
            }
        })
    },

    addItem: function (req, res) {
        User.findById(req.params.id).exec().then(function (user) {
            var items = user.cart.items;
            console.log(111, items);
            var flag = true;
            for (var i = 0; i < items.length; i++) {
                if (req.body.product === items[i].product.toString()) {
                    items[i].quantity++;
                    flag = false;
                }
            }
            if (flag) {
                items.push(req.body);
            }
            return user.save().then(function (resu) {
                return res.json(resu);
            });
        }).catch(function (err) {
            return res.status(500).json(err);
        });
    },

}