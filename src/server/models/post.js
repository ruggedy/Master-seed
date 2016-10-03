var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    mainPicture:{type: String},
    featured:{type: Boolean, required: true, default: false},
	category: {type: Schema.Types.ObjectId, ref:'Category', required: true},
    tags: [{type: Schema.Types.ObjectId, ref:'Tag'}]
});

module.exports = mongoose.model('Post', schema)