const express = require('express');
const router = express.Router();
const AllLists = require('../views/AllLists');
const renderTemplate = require('../lib/renderTemplate');
const { Shablon, User } = require("../../db/models");
const ShowShablon = require("../views/ShowShablon")

router.get('/', async (req, res) => {
  try {
    const Coopers = await Shablon.findAll({ raw: true })
    Coopers.forEach((el) => {
      let taskComplite = 0;
      let taskCount = 0;
      for (const key in el) {
        if (key.startsWith('task')) {
          const element = el[key];
          taskCount++;
          if (typeof (element) === "boolean") {
            taskComplite += element ? 1 : 0;
          } else if (typeof (element) === "string") {
            const elements = element.split(' ');
            if (elements.length === 3) {
              taskComplite++;
            }
          }
        }
      }
      el.percent = Math.floor((taskComplite / taskCount) * 100);
    });
    renderTemplate(AllLists, { Coopers }, res, req);
  } catch (error) {
    console.log(error);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const CoopersShow = await Shablon.findOne({ where: { id } })
    const UserForShowShablon = await User.findOne({ where: { id: CoopersShow.userId } })
    const nameUser = await UserForShowShablon.name
    // res.json(CoopersShow)
    renderTemplate(ShowShablon, { CoopersShow, nameUser }, res, req)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

module.exports = router;