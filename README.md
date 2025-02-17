# Ticket Sales System

O **Ticket Sales System** é um sistema de venda de ingressos desenvolvido para facilitar a compra e gerenciamento de ingressos online. Ele permite que os usuários comprem ingressos, visualizem seu histórico de compras e gerenciem seus dados, enquanto os administradores podem criar, atualizar e excluir ingressos.

---

## Funcionalidades

### **Usuários Comuns**:
- Registrar uma nova conta.
- Fazer login na plataforma.
- Visualizar lista de ingressos disponíveis.
- Comprar ingressos.
- Visualizar histórico de compras.
- Ver detalhes de um ingresso adquirido.

### **Administradores**:
- Criar novos ingressos.
- Atualizar informações de ingressos existentes.
- Excluir ingressos.
- Gerenciar usuários.

---

## Tecnologias Utilizadas

### **Backend**:
- Node.js
- Express.js
- Sequelize (ORM para PostgreSQL)
- JWT (Autenticação)
- Mustache (Templates para views)

### **Frontend**:
- HTML
- CSS
- Mustache (Renderização de templates no servidor)

### **Banco de Dados**:
- PostgreSQL

### **Ferramentas**:
- Git (Controle de versão)
- NPM (Gerenciamento de pacotes)
- Postman (Testes de API)

---

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente.

### **Passos para Configuração**:

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/VictorTavaresRafael/ticket-sales-system.git
   cd ticket-sales-system
2. **Instale as Dependências**:
   ```bash
   npm install
3. **Configure o Banco de Dados**:
   ```bash
   Crie um banco de dados no PostgreSQL.
   Atualize o arquivo config/db.js com as credenciais do seu banco de dados.
4. **Execute as Migrações**:
   ```bash
   npx sequelize-cli db:migrate
5. **Inicie o Servidor**:
   ```bash
   npx start
---
## Rotas da API
 ```bash
Autenticação:
    POST /api/auth/register: Registrar um novo usuário.
    POST /api/auth/login: Fazer login e obter token JWT.
Usuários:
    GET /api/users: Listar todos os usuários (apenas administradores).
    GET /api/users/:id : Obter detalhes de um usuário específico.
    PUT /api/users/:id : Atualizar informações de um usuário.
    DELETE /api/users/:id : Excluir um usuário (apenas administradores).
Ingressos:
    GET /api/tickets: Listar todos os ingressos disponíveis.
    GET /api/tickets/:id : Obter detalhes de um ingresso específico.
    POST /api/tickets: Criar um novo ingresso (apenas administradores).
    PUT /api/tickets/:id : Atualizar informações de um ingresso (apenas administradores).
    DELETE /api/tickets/:id : Excluir um ingresso (apenas administradores).
Compras:
    POST /api/purchases: Realizar uma compra de ingressos.
    GET /api/purchases/history: Visualizar histórico de compras do usuário logado.
    GET /api/purchases/:id : Visualizar detalhes de uma compra específica.
