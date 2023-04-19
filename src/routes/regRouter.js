const express = require('express');
const router = express.Router();
const Registration = require('../views/Registration');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');


router.get('/', (req, res) => {
  renderTemplate(Registration, {}, res, req);
});
module.exports = router;