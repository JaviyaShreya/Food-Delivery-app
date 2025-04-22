const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    sName: {type: String, required: true, trim: true},
    sEmail: {type: String,required: true, lowercase:true,unique: [true, 'Email already exists']},
    sPassword: {type: String, required: true},
    sPhone: {
        type: String, 
        required:true, 
        unique:[true , 'Phone number already exists'],
    },    
    oAddress: {
        sStreet: {type: String, required: true, trim: true},
        sCity: {type: String, required: true, trim: true},
        sState: {type: String, required: true, trim: true},
        sCountry:{type: String, required: true, trim: true},
    },
})

module.exports = mongoose.model('User', userSchema);