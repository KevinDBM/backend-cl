const Sequelize = require('sequelize')
const database = require('../config/database')
const BookModel = require('./Book')
const UserModel = require('./User')
const {bookRequestStatusEnum} = require('../utils/enums')

const BookRequestModel = database.define('BookRequest',{
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
    },
    status: { 
        type: Sequelize.ENUM(Object.values(bookRequestStatusEnum).map(status => status.code)), 
        allowNull: false, 
        defaultValue: 0 
    }
    },
    {
      tableName: 'book_requests',
    }
)

BookRequestModel.belongsTo(BookModel,{
    foreignKey : 'requested_book',
    sourceKey : 'id',
    as : 'RequestedBook'
})

BookRequestModel.belongsTo(BookModel,{
    foreignKey : 'book_to_barter',
    sourceKey : 'id',
    as : 'BookToBarter'
})

BookRequestModel.belongsTo(UserModel,{
    foreignKey : 'requesting_user',
    sourceKey : 'id',
    as : 'RequestingUser'
})


module.exports = BookRequestModel