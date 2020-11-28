// Controller That handle incoming requests
const clientController = require('../../controllers/api/v1/test');

const express = require('express');
let router = express.Router();
router.use('/test', clientController);
module.exports = router;
