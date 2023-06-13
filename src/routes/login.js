const { Router } = require('express');
const { userController } = require('../controllers');
const { validateFields,
   validateFieldsInvalidOrValid } = require('../middleware/loginMiddleware');

const userRouter = Router();

userRouter.post('/login', validateFields, validateFieldsInvalidOrValid, userController.postLogin);

module.exports = userRouter;  