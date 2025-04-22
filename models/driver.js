const mongoose = require('mongoose');
const { Schema } = mongoose;
const { aDriverStatus } = require('../utils/enum'); 

const driverSchema = new Schema({
    sName: {type: String, required:true, trim:true},
    sEmail: {
        type: String,
        match: [/^[^@]+@[^@]+\.[^@]+$/, 'Please enter a valid email address'],
        lowercase: true,
        required:true, 
        unique:[true , 'Email already exists']},
    sPhone: {
        type: String, 
        required:true, 
        unique:[true , 'Phone number already exists'],
    },
    sVehicleNumber: {type: String, required:true, unique:[true , 'Vehicle number already exists']},
    eDriverstatus: {type: String, enum: aDriverStatus, default: 'active'},
    oLocation: {nLat: {type: Number, required: true}, nLong: {type: Number, required: true}}, 
    iCurrentOrderId: {type: Schema.Types.ObjectId, ref: 'Order'},
},{
    timestamps: { 
        createdAt: 'dCreatedAt', 
        updatedAt: 'dUpdatedAt' 
    }
})

module.exports = mongoose.model('Driver', driverSchema);