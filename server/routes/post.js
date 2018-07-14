const express = require('express');
const router = express.Router();
const post_controller = require('../controllers/post');

router.post('/', post_controller.createPost);
router.get('/', post_controller.getPosts);


module.exports = router;