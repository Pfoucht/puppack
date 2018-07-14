const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    // Create a dog Schema 
    name: { type: String },
    birthday: { type: Date },
    weight: { type: Number },
    level: { type: String, default: 'Beginner' },
    tricksLearned: [],
    currentTrick: { type: String }, // Store current trick id
    images: [], 
});


module.exports = mongoose.comment('Post', dogSchema);

