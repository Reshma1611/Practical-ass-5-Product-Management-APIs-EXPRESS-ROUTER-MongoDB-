const mongoose = require("mongoose");
mongoose.pluralize(null);

const productSchema = mongoose.Schema({
    productId: String,
    title: String,
    price: String,
    category: [{
        type: String
    }],
    companyId: String,
    sellerIds: [{
        type: String
    }]
});

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;