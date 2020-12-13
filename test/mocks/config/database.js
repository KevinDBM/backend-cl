'use strict';
const Sequelize = require('sequelize-mock');
const keys = require('../../../config/keys');
const sequelize = new Sequelize(
  keys.database,
  keys.username,
  keys.password,
  {
    host: keys.host,
    port: keys.POSTGRES_PORT,
    dialect: keys.dialect,
    timezone: 'America/Bogota',
    autoQueryFallback : true,
    stopPropagation : true,
    define: {
      underscored: true
    }
  }
);

module.exports = sequelize;
