'use stric';
const Sequelize = require('sequelize');
const database = require('../config/database');

const SystemConfiguration = database.define(
  'system_configuration',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status_company_sells: { type: Sequelize.STRING(30), allowNull: false },
    status_company_buy: { type: Sequelize.STRING(30), allowNull: false }
  },
  {
    timestamps: false
  }
);

module.exports = SystemConfiguration;
