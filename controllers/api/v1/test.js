const express = require('express');
const router = express.Router();
const custom1 = require('../../../services/v1/client/custom1');
const validation = require('../../../middlewares/validation');

router.get('/custom1', custom1);

module.exports = router;
