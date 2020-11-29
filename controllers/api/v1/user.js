const express = require('express');
const router = express.Router();

//services
const userCreateService = require('../../../services/v1/user/createUser')

//middlewares
const {validateCreateUser} = require('../../../middlewares/validationUser')
const checkErrors = require('../../../middlewares/checkErrors')

router.post('/',validateCreateUser(),checkErrors, userCreateService)

module.exports = router