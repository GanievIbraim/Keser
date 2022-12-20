var express = require('express');
var router = express.Router();
var Product = require("../models/product").Product


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', counter: req.session.counter });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход'});
});

router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
});


module.exports = router;
