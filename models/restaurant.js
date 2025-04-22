const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuItemSchema ={
    sName: { type: String, required: true ,trim: true },
    sDescription: { type: String, required: true },
    nPrice: { type: Number, required: true },
    sCategory: { type: String },// type veg/non-veg/vegan
    isItemAvailable: { type: Boolean, default: false },
}

const restaurantSchema = new Schema({
    sName:{ type: String, required:true, trim:true},
    oAddress:{ 
        sStreet:{ type: String, required:true, trim:true},
        sCity:{ type: String, required:true, trim:true},
        sState:{ type: String, required:true, trim:true},
        sCountry:{type: String, required:true, trim:true}
    },
    sPhone: {
        type: String, 
        required:true, 
        unique:[true , 'Phone number already exists'],
    },    
    nRating:{ type: Number, min: 1, max: 5,default: 0}, 
    aMenu: [menuItemSchema],
    sCuisine: { type: String }, //Indian, Chinese, Italian

})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
