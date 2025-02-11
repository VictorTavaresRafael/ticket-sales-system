const { Sequelize } = require('sequelize');
// const Ticket = require('../models/Ticket');
// const Purchase = require('../models/Purchase');

const sequelize = new Sequelize('ticket_sales', 'postgres', 'utfpr', {
  host: 'localhost',
  dialect: 'postgres',
});

// Carrega os modelos
// Ticket.associate({ Purchase });
// Purchase.associate({ Ticket });

module.exports = sequelize;