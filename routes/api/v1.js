// Controller That handle incoming requests
const userController = require('../../controllers/api/v1/user');

const express = require('express');
let router = express.Router();
router.use('/users', userController);
module.exports = router;
