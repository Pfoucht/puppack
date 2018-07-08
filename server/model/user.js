const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const saltRounds = 10;



const userSchema = new Schema({

    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Encrypt pw
    dogName: { type: String}, // Currently setup for one dog
    dogBirth: { type: Date },
    dogWeight: { type: Number },
    dogLevel: { type: String, default: 'Beginner' },
    tricksLearned: { type: String },
    friends: [],
    posts: [],
    images: [ { type: String } ], // Decide on how to handle images, imageCDN, or store image itself
    dateJoined: {type: Date, default: Date.now}

});

// Encryption & Decryption

userSchema.pre('save', function(next){
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(saltRounds, function(err, salt){
        if(err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            // Override text password with hash
            user.password = hash;
            next();
        });
    });
});


userSchema.methods.comparePassword = function(userPassword, cb){
    bcrypt.compare(userPassword, this.password, function(err, res){
        if (err) return cb(err);
        cb(null, res);
    });
};


module.exports = mongoose.model('User', userSchema);


