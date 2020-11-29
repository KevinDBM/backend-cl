const Sequelize = require('sequelize')
const database = require('../config/database')

const UserModel = database.define('User',{
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
    },
    {
      tableName: 'users',
      updatedAt : false
    }
)

module.exports = UserModel