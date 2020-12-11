'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('book_requests',{
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      requesting_user : {type:Sequelize.INTEGER,allowNull:false},
      requested_book : {type:Sequelize.INTEGER,allowNull:false},
      book_to_barter : {type:Sequelize.INTEGER,allowNull:true},
      price_offered : {type:Sequelize.NUMERIC(15,2),allowNull:true},
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at'
      },
      updatedAt: {
          allowNull: true,
          type: Sequelize.DATE,
          field: 'updated_at'
      }
      })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('book_requests');
  }
};
