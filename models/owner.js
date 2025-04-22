const mongoose = require('mongoose');
const { Schema } = mongoose;
const { aOwnerStatus } = require('../utils/enum');
 
const ownerSchema = new Schema({
sName: {
    type: String,
    required: true,
    trim: true
},
sEmail: {
    type: String,
    required: true,
    unique: [true, 'Email already exists'],
    lowercase: true,
    trim: true,
    match: [/^[^@]+@[^@]+\.[^@]+$/, 'Please enter a valid email address']
},
sPassword: {
    type: String,
    required: true,
},
sPhone: {
    type: String, 
    required:true, 
    unique:[true , 'Phone number already exists'],
},
oAddress: {
   sStreet:{type: String, required: true, trim: true},
   sCity:{type: String, required: true, trim: true}, 
   sState:{type: String, required: true, trim: true},
   sCountry:{type: String, required: true, trim: true},
},
isItemAvailable: {type: Boolean,default: true},
eOwnerstatus:{type:String, enum:aOwnerStatus, default: 'active'},
});
 
module.exports = mongoose.model('Owner', ownerSchema);