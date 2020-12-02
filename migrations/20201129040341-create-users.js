'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users',{
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
      name : { type: Sequelize.STRING(250),allowNull : false},
      email : { type: Sequelize.STRING(250),allowNull : false},
      password : { type: Sequelize.STRING(250),allowNull : false},
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at'
      }
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
