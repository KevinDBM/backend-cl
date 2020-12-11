const express = require('express');
const router = express.Router();

//services
const createBookRequest = require('../../../services/v1/bookRequest/createBookRequest');

//middlewares
const checkAuth = require('../../../middlewares/checkAuth');
const c = require('../../../middlewares/checkErrors');
const {validateCreateBookRequest,validateCreateBookRequest2} = require('../../../middlewares/validationBookRequest');
const checkErrors = require('../../../middlewares/checkErrors');

router.post('/',checkAuth,validateCreateBookRequest(),checkErrors,validateCreateBookRequest2(),checkErrors, createBookRequest)
module.exports = router