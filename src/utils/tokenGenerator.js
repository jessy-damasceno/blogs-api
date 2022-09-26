const jwt = require('jsonwebtoken');

require('dotenv/config');

/* Sua chave secreta. É com ela que os dados do seu usuário serão encriptados.

   Em projetos reais, armazene-a numa variável de ambiente e tenha cuidado com ela, pois só quem tem acesso

   a ela poderá criar ou alterar tokens JWT. */

const secret = process.env.JWT_SECRET;

module.exports = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ email }, secret, jwtConfig);
  return token;
};
