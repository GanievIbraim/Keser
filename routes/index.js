var express = require('express');
var router = express.Router();
var Product = require("../models/product").Product


/* GET home page. */
router.get('/', function(req, res, next) {
    Product.find({},{_id:0, title: 1, nick: 1}, function(err, menu){
        res.render('index', { title: 'Express', menu: menu, counter: req.session.counter });
    })
});

module.exports = router;
