// models/Purchase.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Purchase = sequelize.define('Purchase', {
  userId: DataTypes.INTEGER,
  ticketId: DataTypes.INTEGER,
  quantity: DataTypes.INTEGER,
});

module.exports = Purchase;