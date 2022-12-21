var express = require('express');
var router = express.Router();
var checkAuth = require("./../middleware/checkAuth.js")
var Product = require("../models/product").Product
var User = require("./../models/user").User

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', counter: req.session.counter });
});

router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход', error:null});
});

router.post('/logreg', function(req, res, next) {
    var username = req.body.username
    var password = req.body.password

    User.findOne({username:username},function(err,user){
        if(err) return next(err)

        if(user){
            if(!password){
                req.session.user = user._id
                res.redirect('/')
            } else {
                res.render('logreg', {title: 'Вход', error:"Пароль не верный"})
            }
        } else {
            var user = new User({username:username,password:password})
            user.save(function(err,user){
                if(err) return next(err)
                req.session.user = user._id
                res.redirect('/')
            })
        }
    })
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
});
  
module.exports = router;