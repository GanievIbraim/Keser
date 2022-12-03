var express = require('express');
var router = express.Router();
var Product = require('../models/product').Product;

/* Страница продуктов */
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


module.exports = router;
