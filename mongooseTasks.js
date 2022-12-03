var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var Prod = mongoose.model('Prod', { name: String })

var item = new Prod({ name: 'Значок' })
item.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Готово')
    }
})
