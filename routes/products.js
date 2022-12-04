var express = require('express');
var router = express.Router();
var Product = require('../models/product').Product;
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с Products');
});

/* Страница продуктов */
router.get('/:nick', function(req, res, next) {
    Product.findOne({nick:req.params.nick}, function(err,Product){
        if(err) return next(err)
        if(!Product) return next(new Error("Такого товара нет в наличии!"))
        res.render('Product', {
            title: Product.title,
            picture: Product.avatar,
            desc: Product.desc
        })
    })
    
    /*
        function(err,result){
            if(err) return next(err)
            if(!Product) return next(new Error("Такого товара нет в наличии!"))
            res.render('Product', {
                title: Product.title,
                picture: Product.avatar,
                desc: Product.desc,
            });
        })
    */
})

module.exports = router;
