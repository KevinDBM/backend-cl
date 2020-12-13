jest.mock('../middlewares/checkAuth',() => 
    (req,res,next) =>{
        return next()
    }

)

jest.mock('../models/Author',() =>  {
    const authorMock = require('./mocks/models/Author');
    return authorMock;
}
)

jest.mock('../models/Book',() =>  {
    const bookMock = require('./mocks/models/CompleteBook');
    return bookMock;
}
)

jest.mock('../models/BookRequest',() =>  {
const bookRequestMock = require('./mocks/models/BookRequest');
return bookRequestMock;
})

jest.mock('../models/User',() =>  {
const userMock = require('./mocks/models/User');
return userMock;
})

jest.mock('../config/database',() => {
const databaseMock = require('./mocks/config/database')
return databaseMock;
})

module.exports = jest;