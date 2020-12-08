const mongoose = require("mongoose");

const institutionsSchema = new mongoose.Schema({
    id: {type: Number},
    name:{type: String},
    address: {type: String},
    city: {type: String}, 
    state: {type: String},
    telephone: {type: String},
    email: {type: String},
    site: {type: String},
    activeService: {type: Boolean}
},{
    versionKey: false
});

const institutions = mongoose.model("institutions", institutionsSchema);

module.exports = institutions;