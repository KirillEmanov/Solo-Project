const express = require('express');
const router = express.Router();
const Users = require('../views/Users');
const renderTemplate = require('../lib/renderTemplate');
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');

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

router.post('/', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const existingUser = await User.findOne({ where: { name }, raw: true });

    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
