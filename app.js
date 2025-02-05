const express = require('express');
const mustacheExpress = require('mustache-express');
const sequelize = require('./config/db');
const apiAuthRoutes = require('./routes/api/authRoutes'); // Rotas de autenticação
const apiUserRoutes = require('./routes/api/userRoutes'); // Rotas de usuários
const apiTicketRoutes = require('./routes/api/ticketRoutes'); // Rotas de ingressos
const webAuthRoutes = require('./routes/web/authRoutes'); // Rotas da interface web

const app = express();

// Configuração do Mustache
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

// Middleware para processar JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sincroniza o banco de dados
sequelize.sync({ force: true }).then(() => {
  console.log('Banco de dados sincronizado.');
});

// Rotas da API
app.use('/api/auth', apiAuthRoutes); // Rotas de autenticação
app.use('/api/users', apiUserRoutes); // Rotas de usuários
app.use('/api/tickets', apiTicketRoutes); // Rotas de ingressos

// Rotas da interface web
app.use('/auth', webAuthRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor está funcionando!');
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});