const { check } = require('express-validator')

const validateSignUp = [
    check('email').isEmail(),
    check('password').isLength({ min:8 })
]

module.exports = {
    validateSignUp
}