const express = require('express');
const router = express.Router();
console.log(router);
const installController = require('../controllers/install.controller');
router.get('/install', installController.install);

module.exports = router; 