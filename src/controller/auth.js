const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')

const database = require('../../database')

const getAuth = (req, res, next) => {
    res.status(200).send('auth');
}

const signUp = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    const {email, password} = req.body;
    console.log(email, password);
    try {
        const createdUser = await database.User.create({
            email,
            password: bcrypt.hashSync(password, 10)
        })
        const token = JWT.sign({id: createdUser._id}, process.env.JWT_SECRET)
        return res.status(200).cookie('jwt', token).json({email});
    } catch (error) {
        return res.json(error)
    }
}

const logIn = (req, res, next) => {
    res.status(200).send('log in');
}

module.exports = {
    getAuth,
    signUp, 
    logIn
}