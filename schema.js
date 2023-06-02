const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    idproof: String,
      days:Number,
    phonenumber:Number,
    checkindate:Date,
    checkoutdate:Date,
});



module.exports.Customers=mongoose.model("Customers",CustomerSchema);
;


