const express = require('express');

const {
  validateSignUp,
  validateLogIn,
  protectRoute,
} = require('../middleware/validator/auth');
const { getAuth, signUp, logIn, logOut } = require('../controller/auth');

const router = express.Router();

// GET /auth/
router.get('/', protectRoute, getAuth);

// POST /auth/signup/
router.post('/signup', validateSignUp, signUp);

// POST /auth/login/
router.post('/login', validateLogIn, logIn);

// GET /auth/logout
router.get('/logout', logOut);

module.exports = router;
