const { categoriesService } = require('../services');

const newCategory = async (req, res) => {
  const { type, message } = await categoriesService.newCategory(req.body); 
  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

module.exports = {
  newCategory,
};
