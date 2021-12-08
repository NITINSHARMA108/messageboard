const mongoose = require('mongoose');
// creating Schema
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
// exporting the Message model
module.exports = mongoose.model('Message', Message);