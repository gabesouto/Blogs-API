const { Router } = require('express');
const { blogsController } = require('../controllers');
const { tokenValidation } = require('../middleware/token.validation');

const blogsRouter = Router();

blogsRouter.get('/post', tokenValidation, blogsController.getAll);

module.exports = blogsRouter;
