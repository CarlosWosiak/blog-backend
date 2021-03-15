const express = require('express');

const router = express.Router();
const posts = require('./post/routes');

router.use(posts);

module.exports = router;
