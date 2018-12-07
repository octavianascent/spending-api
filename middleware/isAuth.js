const jwt = require('jsonwebtoken');
const configs = require('../config/config');

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    return res.status(401).json({error: true, message: 'Invalid Token'});
  }

  const token = authHeader.split(' ')[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, configs.tokenSecret);
  } catch (err) {
    return res.status(500).json({error: true, message: 'Invalid Token'});
  }

  if (!decodedToken) {
    return res.status(401).json({error: true, message: 'Invalid Token'});
  }

  req.userId = decodedToken.userId;
  next();
};