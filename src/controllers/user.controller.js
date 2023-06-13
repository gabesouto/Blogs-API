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
const getById = async (req, res) => {
  const { id } = req.params;
  const response = await userService.getById(id);
  if (response.type) {
    return res.status(response.type).json({ message: response.message });
  }
  res.status(200).json(response.message);
};

module.exports = {
  createUser,
  getAll,
  getById,
};