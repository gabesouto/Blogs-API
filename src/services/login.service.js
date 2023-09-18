const { User } = require('../models');
const { generateToken } = require('../JWT/JWT');

const sign = async (payload) => {
  const { email, password } = payload;
  const user = await User.findOne({
    where: { email },
  });
  if (user === null) {
    return { type: 400, message: 'Invalid fields' };
  }
  if (user.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  }
  return { type: null, message: generateToken(user.id) };
};

module.exports = {
  sign,
};
