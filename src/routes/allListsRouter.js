const express = require('express');
const router = express.Router();
const AllLists = require('../views/AllLists');
const renderTemplate = require('../lib/renderTemplate');

router.get('/', async (req, res) => {
  renderTemplate(AllLists, {}, res, req);
});

module.exports = router;