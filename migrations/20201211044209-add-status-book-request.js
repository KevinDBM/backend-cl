'use strict';
const {bookRequestStatusEnum} = require('../utils/enums')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('book_requests','status',{ 
      type: Sequelize.ENUM(Object.values(bookRequestStatusEnum).map(status => status.code)), 
      allowNull: false, 
      defaultValue: '0' 
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('book_requests', 'status')
  }
};
