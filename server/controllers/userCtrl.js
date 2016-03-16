var mongoose = require('mongoose'),
    User = require('../models/User'),
    Cart = require('../models/Cart');

module.exports = {

    getUser: function (req, res) {
        console.log(User);
        User.find(req.query)
         .populate('cart')
         .populate('orders')
         .exec(function (err, user) {
            if (err) return res.status(500).send(err);
            else res.send(user);
         });
    },

    postUser: function (req, res) {
        var newUser = req.body;
        var newCart = new Cart();
        newCart.save();
        newUser.cart = [];
        newUser.cart.push(newCart._id);
        User.create(newUser, function (err, result) {
            if (err) {
                res.status(500).json(err);
            } else {
                console.log('User to be added: ', req.body);
                res.json(result);
                
            }
        })
    },

}