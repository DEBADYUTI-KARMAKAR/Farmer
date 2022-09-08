const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    price : {
        type: Number,
        required: true,
        min : 0
    },
    category:{
        type: String,
        lowercase : true,
        enum: ['fruit','vegetable','dairy','fungi']

    }

}) 

const Product = mongoose.model('product', productSchema);


module.exports = Product;


