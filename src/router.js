const express = require('express');

const router = express.Router();
const posts = require('./post/routes');

const authentication = require('../api/authentication');

router.use(authentication, posts);

module.exports = router;
