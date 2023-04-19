const express = require('express');
const router = express.Router();
const Users = require('../views/Users');
const renderTemplate = require('../lib/renderTemplate');

router.get('/', async (req, res) => {
  renderTemplate(Users, {}, res, req);
});

module.exports = router;
