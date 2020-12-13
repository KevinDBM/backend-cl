const request = require('supertest')
const server = require('../server')

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

describe('/books',() => {
    test('test 1',done => {
        return request(server)
        .get('/api/v1/books')
        .then(response => {
            expect(response.statusCode).toBe(200);
            return done();
        })
        .catch((error) => done(error))
    })
})

    

