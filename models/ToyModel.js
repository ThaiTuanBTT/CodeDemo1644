const mongoose = require('mongoose')
var ToySchema = new mongoose.Schema({
    name: String,
    brand: String,
    image: String,
    price: Number,
    year: Number,
    quantity: Number
}, {
    versionKey: false //optional (to remove _v: 0 when add new data)
})

//Note: tham số cuối cùng bắt buộc phải là tên của collection (table) trong DB
var ToyModel = mongoose.model('Toy', ToySchema, 'babytoy')
module.exports = ToyModel