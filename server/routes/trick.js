const express = require('express');
const router = express.Router();
const trick_controller = require('../controllers/trick');

router.get('/', post_controller.getTricks);


module.exports = router;