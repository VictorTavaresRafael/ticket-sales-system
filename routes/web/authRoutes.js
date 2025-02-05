const express = require('express');
const router = express.Router();

// Rota para a página de registro
router.get('/register', (req, res) => {
    res.render('register'); // Renderiza a view register.mustache
  });
  
  // Rota para processar o formulário de registro (POST)
  router.post('/register', (req, res) => {
    // Lógica para registrar o usuário
  });

// Rota para a página de login
router.get('/login', (req, res) => {
  res.render('login'); // Renderiza a view login.mustache
});

// Rota para processar o formulário de login (POST)
router.post('/login', (req, res) => {
  // Lógica para autenticar o usuário
});

module.exports = router;