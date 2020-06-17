const express = require('express');

const { validateSignUp } = require('../middleware/validator/auth')
const { getAuth, signUp, logIn, logOut } = require('../controller/auth')

const router = express.Router();

// GET /auth/
router.get('/', getAuth);

// POST /auth/signup/
router.post('/signup', validateSignUp, signUp);

// POST /auth/login/
router.post('/login', logIn);

// GET /auth/logout
router.get('/logout', logOut)

module.exports = router;