function validateFields(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }
  next();
}
function validateFieldsInvalidOrValid(req, res, next) {
  const { email, password } = req.body;

  const re = /\S+@\S+\.\S+/;
  const characters = 6;
  const passwordIsValid = password.length >= characters;
  const emailIsValid = re.test(email);
  if (!emailIsValid || !passwordIsValid) {
    return res.status(400).json({ message: 'Invaasasalid fields' });
  }
  next();
}

module.exports = {
  validateFields,
  validateFieldsInvalidOrValid,
};
