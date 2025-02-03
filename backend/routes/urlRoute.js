const express = require('express');
const { shortenUrl } = require('../controllers/urlController');
const router = express.Router();

// POST /shorten
router.post('/shorten', shortenUrl);

module.exports = router;
