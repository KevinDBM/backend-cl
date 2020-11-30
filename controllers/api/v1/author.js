const express = require('express');
const router = express.Router();

//services
const getAuthors = require('../../../services/v1/author/getAuthors');

//middlewares
const checkAuth = require('../../../middlewares/checkAuth')

router.get('/',checkAuth, getAuthors)

module.exports = router