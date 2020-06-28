const { check } = require('express-validator');
const jwt = require('jsonwebtoken');

const validateSignUp = [
  check('email').isEmail(),
  check('password').isLength({ min: 8 }),
];

const validateLogIn = [
  check('email').not().isEmpty(),
  check('password').not().isEmpty(),
];

const protectRoute = async (req, res, next) => {
  try {
    const [headerType, token] = req.headers.authorization.split(' ');
    if (headerType !== 'Bearer') throw new Error('wrong header type');
    const data = await jwt.verify(token, process.env.JWT_SECRET);
    req.id = data.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send('unauthorized request');
  }
};

module.exports = {
  validateSignUp,
  validateLogIn,
  protectRoute,
};
