const express = require('express');
const router = express.Router();

//services
const bookCreateService = require('../../../services/v1/book/createBook')

//middlewares
const {validateCreateBook} = require('../../../middlewares/validationBook')
const checkErrors = require('../../../middlewares/checkErrors')
const checkAuth = require('../../../middlewares/checkAuth')

router.post('/',checkAuth,validateCreateBook(),checkErrors, bookCreateService)

module.exports = router