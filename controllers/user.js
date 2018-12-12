const User = require('../models').user;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const configs = require('../config/config');

exports.index = (req, res, next) => {
  res.status(200).json({
    homepage: true
  });
};

exports.login = async (req, res, next) => {
  const { password, email } = req.body;

  const user = await User.findOne({
    where:{ email: email }
  });

  const matchingPasswords = user ? await bcrypt.compare(password, user.password) : false;

  if (!matchingPasswords) {
    return res.status(401).json({message: 'Email or password invalid', error: true});
  }

  const token = jwt.sign(
    {
      email: user.email,
      userId: user.id
    },
    configs.tokenSecret,
    { expiresIn: '1h' }
  );

  res.status(200).json({token: token, userId: user.id});
};

exports.registerUser = async (req, res, next) => {
  const { password, email} = req.body;

  try {
    await User.create({ email: email, password: password});
  } catch (err) {
    console.log(err);
    return res.status(401).json({error: true, message: 'An error occurred'})
  }

  res.status(200).json({error: false, message: 'User created'});
};

exports.logoutUser = (req, res, next) => {
  req.session.loggedIn = false;
  res.redirect('/')
};