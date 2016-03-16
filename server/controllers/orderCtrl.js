var mongoose = require('mongoose'),
    orderSchema = require('../models/Order'),
    Order = mongoose.model('Order', orderSchema);

module.exports = {

    getOrders: function (req, res) {
        Order.find(req.query, function (err, result) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json(result);
            };
        });
    },
    getOrder: function (req, res) {
        Order.findById(req.params.id, function (err, order) {
            if (err) {
                res.status(500).json(err);
            } else {
                User.populate(order, function (err, theOrder) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.json(theOrder);
                    }
                })
            }
        })
    },
    addOrder: function (req, res) {
        var newOrder = new Order(req.body);
        newOrder.save(function (err, result) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json(result);
            };
        });
    },
    editOrder: function (req, res) {
        Order.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json(result);
            };
        });
    },
    removeOrder: function(req, res){
        Order.findByIdAndRemove(req.params.id, req.body, function (err, result) {
            if (err) {
                res.status(500).json(err);
            } else {
                res.json(result);
            };
        });
    }

}