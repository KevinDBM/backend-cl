// Controller That handle incoming requests
const userController = require('../../controllers/api/v1/user');
const authController = require('../../controllers/api/v1/auth');

const express = require('express');
let router = express.Router();
router.use('/users', userController);
router.use('/auth', authController);
module.exports = router;
