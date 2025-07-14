const mongoose = require('mongoose');

const HistorySchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    points: {
        type: Number,
        default: 0
    }
}, { timestamps: true } );

const History= mongoose.model('History',HistorySchema);
module.exports=History;