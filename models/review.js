const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    iUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    iRestaurantId: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    iOrderId: { type: Schema.Types.ObjectId, ref: 'Order' },
    nRating: { type: Number,  min: 1, max: 5 },
    sComment: { type: String, trim: true },
   
},{
    timestamps: { 
        createdAt: 'dCreatedAt', 
        updatedAt: 'dUpdatedAt' 
    }
});

module.exports = mongoose.model('Review', reviewSchema);