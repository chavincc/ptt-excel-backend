const express = require('express');

const {getAuth, signUp, logIn} = require('../controller/auth')

const router = express.Router();

// GET /auth/
router.get('/', getAuth);

// POST /auth/signup/
router.post('/signup', signUp);

// POST /auth/login/
router.post('/login', logIn);

module.exports = router;