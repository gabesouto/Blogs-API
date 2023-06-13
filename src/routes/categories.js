const { Router } = require('express');
const { categoriesController } = require('../controllers');
const { tokenValidation } = require('../middleware/tokenValidation');

const categoriesRouter = Router();

categoriesRouter.post('/categories', tokenValidation, categoriesController.newCategory);

module.exports = categoriesRouter;  