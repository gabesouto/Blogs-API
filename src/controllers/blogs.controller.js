const { blogsService } = require('../services');

const getAll = async (req, res) => {
  const response = await blogsService.getAll();
  res.status(200).json(response.message);
};

module.exports = {
  getAll,
};
