
const User = require('../model/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');


exports.signUp = function(req, res, next){
    let user = new User({
        username: req.body.username,
        password: req.body.password
    });
    user.save()
        .then(savedUser => {
            console.log('User saved : ' + savedUser);
            return res.status(200).json({ user: savedUser });
        })
        .catch(err => res.status(401).json(err));
};


exports.signIn = function(req, res, next){
    passport.authenticate('local', { session : false }, (err, user, info) => {
        if (err || !user){
            return res.status(400).json({
                message: info.message,
                error: err
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err){
                res.send(err);
            }
            const token = jwt.sign({ username: user.username, userId: user._id }, 'WE_NEED_A_SECRET');
            return res.json({ user, token });
        });
    })(req, res);
};