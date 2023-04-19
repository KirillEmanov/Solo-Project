const express = require('express');
const router = express.Router();
const Login = require('../views/Login');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  renderTemplate(Login, {}, res, req);
});
module.exports = router;