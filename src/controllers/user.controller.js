const { userService } = require('../services');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body); 
  if (type) return res.status(type).json({ message });

  res.status(201).json({ token: message });
};

const getAll = async (req, res) => {
  const response = await userService.getAll();
  res.status(200).json(response);
};

module.exports = {
  createUser,
  getAll,
};