const chai = require('chai');
const http = require('chai-http');
const app = require('../../config/app')()
const mock = require('mock-require');
//const BookMock = require('../../models/mocks/Book')
const databaseTest = require('../../config/database.test')
const checkAuthMock = require('../../models/mocks/checkAuth');
const sinon = require('sinon')
const checkAuth = require('../../middlewares/checkAuth')
const mockery = require('mockery')
const proxyquire = require('proxyquire')
const path = require('path')
const supertest = require('supertest')

app.create()
const server = app.start()
server.use((req,res,next) => {
    mock('../../middlewares/checkAuth',checkAuthMock) 
    mock('../../config/database', databaseTest)
    return next();
})

chai.use(http)

mock('../../config/database', databaseTest)
        mock('../../models/Book', '../../models/mocks/Book')
        mock('../../middlewares/checkAuth',checkAuthMock)

describe('Registrando usuario',() => {   
    beforeEach((done) => {
        mock('../../middlewares/checkAuth',checkAuthMock)
        done()
    })
    it('Usuarios para registrar',(done) => {
        
        supertest(server)
        .get('/api/v1/books')
        .then((response) => {
            mock('../../middlewares/checkAuth',checkAuthMock)
            chai.expect(response).to.have.status(200)
            done()
        }).catch((err) => done(err))
    })
})