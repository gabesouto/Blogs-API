const { Router } = require('express');
const { blogsController } = require('../controllers');
const { tokenValidation } = require('../middleware/token.validation');
const { fieldsValidation } = require('../middleware/postFields.validation');

const postRouter = Router();

postRouter.post(
  '/post',
  tokenValidation,
  fieldsValidation,
  blogsController.postBlog
);

postRouter.get('/post/:id', blogsController.getBlogById);

module.exports = postRouter;
