const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Ticket = sequelize.define('Ticket', {
  name: DataTypes.STRING,
  price: DataTypes.FLOAT,
  quantity: DataTypes.INTEGER,
});

// Associação com o modelo Purchase
Ticket.associate = (models) => {
  Ticket.hasMany(models.Purchase, { foreignKey: 'ticketId' });
};

module.exports = Ticket;