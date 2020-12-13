const database = require('../config/database')

const AuthorMock = database.define('Author',{ 
        id:1,
        name:'George Orwell',
        createdAt: '2020-12-12 01:04:52'
    }
)

module.exports = AuthorMock