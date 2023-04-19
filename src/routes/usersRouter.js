const express = require('express');
const router = express.Router();
const Users = require('../views/Users');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const userList = await User.findAll({
      attributes: ['name', 'role'],
      raw: true,
    });

    renderTemplate(Users, { userList }, res, req);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.put('/', async (req, res) => {
  try {
    const { name, role } = req.body;
    await User.update({ role }, { where: { name } });

    const updatedUser = await User.findOne({
      where: { name },
      attributes: ['name', 'role'],
      raw: true,
    });

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});


module.exports = router;

