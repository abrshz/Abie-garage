const express = require('express');
const router = express.Router();
const installRoute = require('./install.route');

router.use(installRoute);

module.exports = router;
