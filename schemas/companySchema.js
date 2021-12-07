const mongoose = require("mongoose");
mongoose.pluralize(null);

const companySchema = mongoose.Schema({
    companyId: String,
    name: String,
    productIds: [{
        type:String
    }]
});

const companyModel = mongoose.model("company", companySchema);
module.exports = companyModel;