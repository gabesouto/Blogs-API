const { verifyToken } = require('../JWT/JWT');

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization.replace('Bearer', '').trim();
  console.log(
    '🚀 ~ file: token.validation.js:5 ~ tokenValidation ~ token:',
    token
  );

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decoded = verifyToken(token);
    console.log('try block', decoded.data);
    if (!decoded) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }
    req.user = decoded.data.userId;
    console.log('req.user', req.user);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidation,
};
