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
    async.parallel([
            function(callback){
                Product.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Product.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var Product = result[0]
            var Products = result[1] || []
            if(!Product) return next(new Error("Такого товара нет в наличии!"))
            res.render('Product', {
                title: Product.title,
                picture: Product.avatar,
                desc: Product.desc,
                menu: Products
            });
        })
})



/* Страница продуктов 
router.get('/:nick', function(req, res, next) {
    Product.findOne({nick:req.params.nick}, function(err,Product){
        if(err) return next(err)
        if(!Product) return next(new Error("Нет такого товара"))
        res.render('Product', {
            title: Product.title,
            picture: Product.avatar,
            desc: Product.desc
        })
    })
})
*/



module.exports = router;
