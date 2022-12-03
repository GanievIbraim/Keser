var mongoose = require('mongoose')
var Schema = mongoose.Schema

var productSchema = new Schema({
	title: String,
	nick: {
		type: String,
		unique: true,
		required: true
	},
	avatar: String,
	desc: String,
	created:{
		type:Date,
		default:Date.now
	}
})

module.exports.Product = mongoose.model("Product", productSchema)
