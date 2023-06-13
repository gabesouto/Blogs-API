const { categoriesService } = require('../services');

const newCategory = async (req, res) => {
  const { type, message } = await categoriesService.newCategory(req.body); 
  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

const getAll = async (req, res) => {
  const response = await categoriesService.getAll();
  res.status(200).json(response);
};

module.exports = {
  newCategory,
  getAll,
};
