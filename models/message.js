const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Message= new Schema({
    user: {
        type: String,
        required:true
    },
    message: {
        type:String,
        required:true
    },
    date:{
        type: Date
    }
})
module.exports = mongoose.model('Message', Message);