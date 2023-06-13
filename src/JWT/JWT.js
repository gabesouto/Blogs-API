const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (param) => {
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = jwt.sign({ data: { userId: param } }, secret, jwtConfig);

return token;
};

module.exports = {
  generateToken,
};