const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/', function(req, res, next){
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
});



module.exports = router;