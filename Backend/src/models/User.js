const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    profileImage: {
        type: String,
        default: null
    }
}, { timestamps: true } );

const User= mongoose.model('User',UserSchema);
module.exports=User;