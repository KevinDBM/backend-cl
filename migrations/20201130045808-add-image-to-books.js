'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('books','image',{ type: Sequelize.STRING(1000),allowNull : false})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('books', 'image')
  }
};
