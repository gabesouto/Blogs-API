const { Router } = require('express');
const { blogsController } = require('../controllers');
const { tokenValidation } = require('../middleware/tokenValidation');

const categoriesRouter = Router();

categoriesRouter.get('/post', tokenValidation, blogsController.getAll);

module.exports = categoriesRouter;  