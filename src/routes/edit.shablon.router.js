const express = require('express');
const router = express.Router();
const EditList = require('../views/EditList');
const renderTemplate = require('../lib/renderTemplate');
const { Shablon } = require("../../db/models");

router.get('/show.shablon/:id', async (req, res) => {
  try {
    const { id } = req.params
    const CoopersShow = await Shablon.findOne({ where: { id } })
    // const LiderForShowShablon = await User.findOne({ where: { id: CoopersShow.userId} })
    // const nameUser = await UserForShowShablon.name
    renderTemplate(EditList, { CoopersShow }, res, req)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

router.put('/edit.shablon/:id', async (req, res) => {
  try {
    // console.log(req.body);
    const shablonEdit = await Shablon.findOne({ where: { id: req.params.id } });
    const { task1, task2, task3, task4, task5, task6, task7, task8, task9, task10, task11, task12 } = req.body;
    shablonEdit.task1 = task1;
    console.log("🚀🚀🚀🚀🚀 ~ shablonEdit:", shablonEdit)
    
    shablonEdit.task2 = task2;
    shablonEdit.task3 = task3;
    shablonEdit.task4 = task4;
    shablonEdit.task5 = task5;
    shablonEdit.task6 = task6;
    shablonEdit.task7 = task7;
    shablonEdit.task8 = task8;
    shablonEdit.task9 = task9;
    shablonEdit.task10 = task10;
    shablonEdit.task11 = task11;
    shablonEdit.task12 = task12;
    shablonEdit.save();
    res.sendStatus(200)
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;