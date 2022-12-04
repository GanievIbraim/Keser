var express = require('express');
var router = express.Router();
var Product = require("../models/product").Product


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', counter: req.session.counter });
});

module.exports = router;
