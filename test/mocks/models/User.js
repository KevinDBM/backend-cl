const database = require('../config/database')

const UserMock = database.define('User',{ 
        id:1,
        name:'Kevin CL',
        email:'kevincl4@yopmail.com',
        password:'kevincl',
        createdAt: '2020-12-12 01:04:52'
    }
)

module.exports = UserMock