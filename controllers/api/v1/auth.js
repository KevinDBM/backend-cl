const express = require('express');
const router = express.Router();

//services
const createAuthToken = require('../../../services/v1/auth/createAuthToken')

//middlewares
const {validateCreateToken} = require('../../../middlewares/validationAuth')
const checkErrors = require('../../../middlewares/checkErrors')

router.post('/',validateCreateToken(),checkErrors, createAuthToken)

module.exports = router