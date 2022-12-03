var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test_1')
var Product = require("./models/product").Product

var product = new Product({
	title: "Значок",
	nick: "pin"
})

console.log(product)

product.save(function(err, product, affected){
    console.log(product.title)
})


