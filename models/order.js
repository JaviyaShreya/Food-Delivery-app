const mongoose = require('mongoose');
const { Schema } = mongoose;
const { aPayment, aPaymentStatus, aOrderStatus } = require('../utils/enum');

const orderSchema = new Schema({
    iOrderId: { type: Number, required: true, unique: true },
    iUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    iRestaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    aItem: [{
        sName:{type:String, required:true, trim:true},
        nQuantity:{type:Number, required:true, min:1},
        nPrice:{type:Number, required:true, min:0},
        }], 
    nTotalAmount: { type: Number, required: true, min: 0 },
    ePaymentMethod: { type: String, enum: aPayment, required: true },
    ePaymentStatus: { type: String, enum: aPaymentStatus, default: 'pending' },
    iDriverId: { type: Schema.Types.ObjectId, ref: 'Driver' }, 
    eOrderStatus: { type: String, enum: aOrderStatus, default: 'pending' },
    oDeliveryAddress: { 
        sState:{ type: String, required: true , trim: true },
        sCity:{ type: String, required: true ,trim: true },
        sStreet:{ type: String, required: true, trim: true },
        sCountry:{ type: String, required: true, trim:true }
    },
    
},
{
    timestamps: { 
        createdAt: 'dCreatedAt', 
        updatedAt: 'dUpdatedAt' 
    }
});

module.exports = mongoose.model('Order', orderSchema);