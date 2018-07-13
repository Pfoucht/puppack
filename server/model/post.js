const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const postSchema = new Schema({
    content: {type: String},
    datePosted: { type: Date, default: Date.now },
    author: { type: String }, //Change to storing user id
    comments: []
});


module.exports = mongoose.comment('Post', postSchema);