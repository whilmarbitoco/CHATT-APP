const express = require('express');
const router = express.Router();
const customerController = require('../controllers/mainController');

router.get('/', customerController.homepage);
router.get('/:name', customerController.setName);

module.exports = router;