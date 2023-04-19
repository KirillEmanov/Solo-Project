const express = require('express');
const router = express.Router();
const AllLists = require('../views/AllLists');
const renderTemplate = require('../lib/renderTemplate');
const { Shablon, User } = require("../../db/models");
const ShowShablon = require("../views/ShowShablon")

router.get('/', async (req, res) => {
  try {
    const Coopers = await Shablon.findAll({ raw: true })
    renderTemplate(AllLists, { Coopers }, res, req);
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
    // res.json(CoopersShow)
    renderTemplate(ShowShablon, { CoopersShow, nameUser }, res, req)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

module.exports = router;