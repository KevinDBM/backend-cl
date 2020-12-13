const database = require('../config/database')
const BookMock = require('./CompleteBook')
const UserMock = require('./User')

const BookRequestMock = database.define('BookRequest',{ 
        id:1,
        requesting_user : 'Fundamentos de pruebas unitarias',
        requested_book : 'FPU',
        book_to_barter : null,
        price_offered : 10000,
        createdAt: '2020-12-12 01:04:52',
        updatedAt: '2020-12-12 01:04:52',
        status: 0
    }
)

BookRequestMock.belongsTo(BookMock,{
    foreignKey : 'requested_book',
    sourceKey : 'id',
    as : 'RequestedBook'
})

BookRequestMock.belongsTo(BookMock,{
    foreignKey : 'book_to_barter',
    sourceKey : 'id',
    as : 'BookToBarter'
})

BookRequestMock.belongsTo(UserMock,{
    foreignKey : 'requesting_user',
    sourceKey : 'id',
    as : 'RequestingUser'
})


module.exports = BookRequestMock