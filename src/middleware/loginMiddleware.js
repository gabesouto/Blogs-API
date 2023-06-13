function validateFields(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
}
  function validateFieldsInvalidOrValid(req, res, next) {
    const { email, password } = req.body;
  if (email !== 'lewishamilton@gmail.com' || password !== '123456') {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
  }

  module.exports = {
    validateFields,
    validateFieldsInvalidOrValid,
  };