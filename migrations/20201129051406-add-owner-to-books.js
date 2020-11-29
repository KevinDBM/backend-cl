'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('books','owner',{type:Sequelize.INTEGER,allowNull:false})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('books', 'owner')
  }
};
