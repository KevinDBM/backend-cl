'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('create extension unaccent schema public;;')
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.sequelize.query('drop extension unaccent;')
  }
};
