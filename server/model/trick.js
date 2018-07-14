const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trickSchema = new Schema({
    name: { type: String },
    level: { type: String },
    trainingTime: { type: Number },
    videoURL: { type: String },
    article: { type: String},
    steps: [],
    preReqs: [],
});


module.exports = mongoose.comment('Post', trickSchema);

