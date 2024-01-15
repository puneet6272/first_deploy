const mongoose = require('mongoose');
const { Schema } = mongoose



const productSchema = new Schema({
    id: String,
    title: String,
    description: String,
    price: Number,
    discountPercentage:Number,
    brand: String,
    category: String,
    thumbnail:String,
});

    exports.Product = mongoose.model('Product',productSchema)
