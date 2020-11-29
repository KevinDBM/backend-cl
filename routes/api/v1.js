// Controller That handle incoming requests
const userController = require('../../controllers/api/v1/user');
const authController = require('../../controllers/api/v1/auth');
const bookController = require('../../controllers/api/v1/book')

const express = require('express');
let router = express.Router();
router.use('/users', userController);
router.use('/auth', authController);
router.use('/books', bookController);
module.exports = router;
