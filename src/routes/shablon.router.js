const express = require('express');
const router = express.Router();
const Shablon = require('../views/Shablon');
const renderTemplate = require('../lib/renderTemplate');

router.get('/shablon', async (req, res) => {
  renderTemplate(Shablon, {}, res, req);
});

module.exports = router;
