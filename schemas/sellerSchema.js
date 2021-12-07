const mongoose = require("mongoose");
mongoose.pluralize(null);

const sellerSchema = mongoose.Schema({
    sellerId: String,
    name: String,
    productIds: [{
        type: String
    }]
});

const sellerModel = mongoose.model("seller", sellerSchema);
module.exports = sellerModel;