const express = require('express');
const router = express.Router();

//services
const createBookRequest = require('../../../services/v1/bookRequest/createBookRequest');
const getMyBookRequests = require('../../../services/v1/bookRequest/getMyBookRequests');

//middlewares
const checkAuth = require('../../../middlewares/checkAuth');
const {validateCreateBookRequest,validateCreateBookRequest2} = require('../../../middlewares/validationBookRequest');
const checkErrors = require('../../../middlewares/checkErrors');

router.get('/',checkAuth,getMyBookRequests);
router.post('/',checkAuth,validateCreateBookRequest(),validateCreateBookRequest2(),checkErrors, createBookRequest)
module.exports = router