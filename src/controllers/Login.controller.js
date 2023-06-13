const { loginService } = require('../services');

const auth = async (req, res) => {
  const { type, message } = await loginService.sign(req.body); 
  if (type) return res.status(type).json({ message });

  res.status(200).json({ token: message });
};

module.exports = {
  auth,
};