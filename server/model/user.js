const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({

    username: { type: String, required: true },
    password: { type: String, required: true }, // Encrypt pw
    dogName: { type: String}, // Currently setup for one dog
    dogBirth: { type: Date },
    dogWeight: { type: Number },
    dogLevel: { type: String, default: 'Beginner' },
    tricksLearned: { type: String },
    friends: [],
    posts: [],
    images: [ { type: String } ], // Decide on how to handle images, imageCDN, or store image itself

});


module.exports = mongoose.model('User', userSchema);


