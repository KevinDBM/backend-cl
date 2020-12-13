const database = require('../config/database')
const AuthorMock = require('./Author')
const UserMock = require('./User')

const BookMock = database.define('Book',{ 
        id:1,
        title : 'Fundamentos de pruebas unitarias',
        isbn : 'FPU',
        description : '',
        Author : { 
            id:1,
            name:'George Orwell',
            createdAt: '2020-12-12 01:04:52'
        },
        Owner : { 
            id:1,
            name:'Kevin CL',
            email:'kevincl4@yopmail.com',
            password:'kevincl',
            createdAt: '2020-12-12 01:04:52'
        },
        image : 'https://example.com/image.jpg',
        createdAt: '2020-12-12 01:04:52',
        updatedAt: '2020-12-12 01:04:52'
    }
)

BookMock.belongsTo(AuthorMock,{
    foreignKey : 'author',
    sourceKey : 'id'
})

BookMock.belongsTo(UserMock,{
    foreignKey : 'owner',
    sourceKey : 'id',
    as : 'Owner'
})


module.exports = BookMock