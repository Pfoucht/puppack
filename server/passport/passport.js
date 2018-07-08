const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');

passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    },
    function (username, password, cb){
        return User.findOne({username})
            .then(user => {
                if (!user){
                    return cb(null, false, {message: 'Incorrect username'});
                };
                user.comparePassword(password, function(err, isMatch){
                    if(err) return cb(null, false, { message: 'Incorrect username or password' });
                    
                    if(!isMatch){
                        return cb(null, false, { message: 'Incorrect username or password' });
                    };

                    return cb(null, user, { message: 'Logged in successfully' });

                });
            })
            .catch(err => cb(err));
    }
));