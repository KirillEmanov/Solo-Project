const express = require('express');
const router = express.Router();
const MyLists = require('../views/MyLists');
const renderTemplate = require('../lib/renderTemplate');

router.get('/', async (req, res) => {
  renderTemplate(MyLists, {}, res, req);
});

module.exports = router;