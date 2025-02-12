const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const token = req.cookies.token; // Acessa o token do cookie
  if (!token) return res.redirect('/auth/login'); // Redireciona para o login se não houver token

  try {
    const verified = jwt.verify(token, 'secretkey');
    req.user = verified;
    next();
  } catch (error) {
    res.redirect('/auth/login'); // Redireciona para o login se o token for inválido
  }
};