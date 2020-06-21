const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const database = require('../../database');

const getAuth = async (req, res, next) => {
  const { id } = req;
  const user = await database.User.findOne({ _id: id });
  res.status(200).json(user.email);
};

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const createdUser = await database.User.create({
      email,
      password: bcrypt.hashSync(password, 10),
    });
    const token = JWT.sign({ id: createdUser._id }, process.env.JWT_SECRET);
    return res
      .status(200)
      .cookie('jwt', token, { httpOnly: true })
      .json({ email });
  } catch (error) {
    return res.json(error);
  }
};

const logIn = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;
    const user = await database.User.findOne({ email });
    if (!user) throw new Error('not found');
    if (!bcrypt.compareSync(password, user.password))
      throw new Error('wrong password');
    else {
      const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);
      res.status(200).cookie('jwt', token, { httpOnly: true }).send('log in');
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

const logOut = (req, res, next) => {
  res.status(200).clearCookie('jwt').send('log out');
};

module.exports = {
  getAuth,
  signUp,
  logIn,
  logOut,
};
