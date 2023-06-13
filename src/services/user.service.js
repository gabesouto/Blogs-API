const Joi = require('joi');
const { User } = require('../models');
const { generateToken } = require('../JWT/JWT');

const createUser = async (payload) => {
  const { displayName, email, password, image } = payload;

  const userExists = await User.findOne({ where: { email } });
  if (userExists) return { type: 409, message: 'User already registered' };

  if (displayName.length < 8) {
 return {
     type: 400, message: '"displayName" length must be at least 8 characters long' }; 
}

  const { error } = Joi.string().email().required().validate(email);
  if (error) return { type: 400, message: '"email" must be a valid email' };

  if (password.length < 6) {
 return {
     type: 400, message: '"password" length must be at least 6 characters long' }; 
}

  const newUser = await User.create({ displayName, email, password, image });
  const token = generateToken(newUser.id);

  return { type: null, message: token };
};

const getAll = async () => {
    const users = await User.findAll({ attributes: { exclude: 'password' } });
    console.log(users);
    return users;
};
module.exports = {
  createUser,
  getAll,
};