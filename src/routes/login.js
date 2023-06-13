const { Router } = require('express');
const { loginController } = require('../controllers');
const { validateFields,
   validateFieldsInvalidOrValid } = require('../middleware/loginMiddleware');

const loginRouter = Router();

loginRouter.post('/login', validateFields, validateFieldsInvalidOrValid, loginController.auth);

module.exports = loginRouter;  