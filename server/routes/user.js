const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user'); // import as userController or user_controller?

router.post('/', user_controller.signUp); 
router.post('/login', user_controller.signIn);
router.get('/:username', user_controller.getUser);

module.exports = router;