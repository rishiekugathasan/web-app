const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let coachSchema = Schema({
	name: {type: String, required: true},
	position: {type: String},
	story: {type: String},
	profilePic: {type: String},
	images: [String]
	//availability: {type: Boolean}
}); 

module.exports = mongoose.model("Coach", coachSchema);