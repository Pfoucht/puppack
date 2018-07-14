const Post = require('../model/post');


exports.createPost = function(req, res, next){
    let post = new Post({
        content: req.body.content,
        author: "User ID" // Should be userID
    });
    post.save()
        .then(savedPost => {
            return res.json({ post: post })
        })
        .catch(error => res.status(400).json({ error: error }));
};


exports.getPosts = function(req, res, next){
    Post.find({})
        .limit(10)
        .exec(function(err, posts){
            console.log(posts);
        });
}

