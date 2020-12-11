const express = require('express');
const router = express.Router();

//services
const createBookRequest = require('../../../services/v1/bookRequest/createBookRequest');
const getMyBookRequests = require('../../../services/v1/bookRequest/getMyBookRequests');

//middlewares
const checkAuth = require('../../../middlewares/checkAuth');
const {validateCreateBookRequest,validateCreateBookRequest2,validateUpdateStatus} = require('../../../middlewares/validationBookRequest');
const checkErrors = require('../../../middlewares/checkErrors');
const checkOwnBookRequest = require('../../../middlewares/bookRequests/checkOwnBookRequest');
const updateStatusBookRequest = require('../../../services/v1/bookRequest/updateStatusBookRequest');

router.get('/',checkAuth,getMyBookRequests);
router.post('/',checkAuth,validateCreateBookRequest(),validateCreateBookRequest2(),checkErrors, createBookRequest)
router.patch('/:bookRequestId/status',checkAuth,validateUpdateStatus(),checkErrors,checkOwnBookRequest,updateStatusBookRequest)
module.exports = router