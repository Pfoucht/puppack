const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const saltRounds = 10;



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


// Encryption & Decryption


userSchema.pre('save', function(next){
    var user = this;

    if(!user.isModified('passowrd')) return next();

    bcrypt.hash(user.password, saltRounds, function(err, hash){
        if(err) return next(err);
        // Overide text password with hash
        user.password = hash;
        next();
    });
});




userSchema.methods.comparePassword = function(userPassword, cb){
    bcrypt.compare(userPassword, this.password, function(err, res){
        if (err) return cb(err);
        cb(null, res);
    });
};

// Example usage of comparePassword
// user.comparePassword('password123', function(err, isMatch){
//     if ( err ) throw err;
//     console.log(isMatch)  ----> true
// }





module.exports = mongoose.model('User', userSchema);


