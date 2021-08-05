const mongoose = require('mongoose');
const commentSchema = require('../models/commentSchema');


const eventSchema = new mongoose.Schema(
	{
		links: Array,
        state: String,
        city: String,
        date: String,
        name:String,
		comments: [commentSchema]
	}, 
	{
		timestamps: true
	},
);
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
