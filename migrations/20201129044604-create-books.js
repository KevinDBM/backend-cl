'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
      title : { type: Sequelize.STRING(250),allowNull : false},
      isbn : { type: Sequelize.STRING(13),allowNull : false},
      description : { type: Sequelize.STRING(500),allowNull : true},
      author : {type:Sequelize.INTEGER,allowNull:false},
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
    await queryInterface.dropTable('books');
  }
};
