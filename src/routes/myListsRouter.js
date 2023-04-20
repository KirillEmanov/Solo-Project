const express = require('express');
const router = express.Router();
const MyLists = require('../views/MyLists');
const renderTemplate = require('../lib/renderTemplate');
const { Shablon, User } = require("../../db/models");
const ShowShablon = require("../views/ShowShablon");

router.get('/', async (req, res) => {
  try {
    const user = await User.findOne({ where: { name: req.session.user }, raw: true });
    const userId = user.id;
    const MyCoopers = await Shablon.findAll({ where: { userId }, raw: true })
    renderTemplate(MyLists, { MyCoopers }, res, req);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const CoopersShow = await Shablon.findOne({ where: { id } })
    const UserForShowShablon = await User.findOne({ where: { id: CoopersShow.userId} })
    const nameUser = await UserForShowShablon.name
    renderTemplate(ShowShablon, { CoopersShow, nameUser }, res, req)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

module.exports = router;