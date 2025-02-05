const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ticket_sales', 'postgres', 'utfpr', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;