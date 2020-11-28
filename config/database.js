'use strict';
const Sequelize = require('sequelize');
const keys = require('../config/keys');
const sequelize = new Sequelize(
  keys.POSTGRES_DATABASE,
  keys.POSTGRES_USERNAME,
  keys.POSTGRES_PASSWORD,
  {
    host: keys.POSTGRES_HOST,
    port: keys.POSTGRES_PORT,
    dialect: 'postgres',
    timezone: 'America/Bogota',
    define: {
      underscored: true
    }
  }
);

module.exports = sequelize;
