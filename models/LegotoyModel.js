const mongoose = require('mongoose')
var LegotoySchema = new mongoose.Schema({
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
var LegotoyModel = mongoose.model('Legotoy', LegotoySchema, 'legotoy')

module.exports = LegotoyModel