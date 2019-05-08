const path = require('path');

const express = require('express');

const mainController = require('../controllers/mainController');

const router = express.Router();

// / => GET
router.get('/', mainController.getAddDetail);

// / => POST
router.post('/', mainController.postAddDetail);

// /email-send => GET
router.get('/email-send', mainController.getEmail);

// /email-send => POST
router.post('/email-send', mainController.postEmail);


module.exports = router;