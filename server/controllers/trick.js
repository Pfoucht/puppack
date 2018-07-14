
const Trick = require('../model/trick');


exports.getTrick = function(req, res, next){
    Trick.find({})
        .then(tricks => res.json({ tricks: tricks }));
};

exports.getTrickByLevel = function(req, res, next){
    Trick.find({ level: req.body.level })
        .then(tricks => res.json({ tricks: tricks }));
};

