var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({ name: String })

schema.methods.complete = function(){
    console.log(this.get("name") + " готов!")
}
var Prod = mongoose.model('Prod', schema)


var item = new Prod({ name: 'Значок' })
item.save(function (err) {
    item.complete()
})

