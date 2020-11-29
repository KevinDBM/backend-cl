const Sequelize = require('sequelize')
const database = require('../config/database')

const AuthorModel = database.define('Author',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    name : { type: Sequelize.STRING(250),allowNull : false},
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
    }
    },
    {
      tableName: 'authors',
      updatedAt : false
    }
)

module.exports = AuthorModel