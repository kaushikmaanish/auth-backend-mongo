const express = require('express');
const { signup, login, getMe } = require('../controllers/authController');
const { signupValidator, loginValidator } = require('../validators/authValidator');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', signupValidator, signup);
router.post('/login', loginValidator, login);
router.get('/me', authMiddleware, getMe);

module.exports = router;
