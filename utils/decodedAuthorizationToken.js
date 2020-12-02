const jwt = require('jsonwebtoken');
const { convertToStringAndCompare } = require('.');
const {JWT_KEY} = require('../config/keys');

const decodedAuthorizationToken = authorizationToken => {
  const token = authorizationToken.split(' ')[1];
  if (token === 'null' || !token) {
    return null;
  }
  const decoded = jwt.verify(token, JWT_KEY);
  return decoded;
};

module.exports = decodedAuthorizationToken;
