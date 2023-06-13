const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const postLogin = async (req, res) => {
// Dados do payload para construir o token
const payload = {
  id: 5,
  displayName: 'usuário de teste',
  email: 'teste@example.com',
  image: 'null',
};

// Variável de ambiente contendo a chave secreta para a geração do token

// Gerar o token
const token = jwt.sign(payload, secret);

// Retornar o token como resposta
const response = {
  token,
};

console.log(response);

  res.status(200).json(response); 
};
module.exports = {

  postLogin,
};