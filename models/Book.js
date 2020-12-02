const Sequelize = require('sequelize')
const database = require('../config/database')
const AuthorModel = require('./Author')
const UserModel = require('./User')

const BookModel = database.define('Book',{
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
    owner : {type:Sequelize.INTEGER,allowNull:false},
    image : { type: Sequelize.STRING(1000),allowNull : false},
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
    },
    {
      tableName: 'books',
    }
)

BookModel.belongsTo(AuthorModel,{
    foreignKey : 'author',
    sourceKey : 'id'
})

BookModel.belongsTo(UserModel,{
    foreignKey : 'owner',
    sourceKey : 'id',
    as : 'Owner'
})


module.exports = BookModel