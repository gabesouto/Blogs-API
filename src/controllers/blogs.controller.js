const { blogsService } = require('../services');

const getAll = async (req, res) => {
  const response = await blogsService.getAll();
  res.status(200).json(response.message);
};

const postBlog = async (req, res) => {
  const response = await blogsService.postBlog(req.body, req.user);
  if (response.type)
    return res.status(response.type).json({ message: response.message });
  res.status(201).json(response.message);
};

module.exports = {
  getAll,
  postBlog,
};
