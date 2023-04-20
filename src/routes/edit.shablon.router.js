const express = require('express');
const router = express.Router();
const EditList = require('../views/EditList');
const renderTemplate = require('../lib/renderTemplate');
const { Shablon, User } = require("../../db/models");

router.get('/show.shablon/:id', async (req, res) => {
  try {
    const { id } = req.params
    const CoopersShow = await Shablon.findOne({ where: { id } })
    const UserForShowShablon = await User.findOne({ where: { id: CoopersShow.userId} })
    const nameUser = await UserForShowShablon.name
    renderTemplate(EditList, { CoopersShow, nameUser }, res, req)
  } catch (error) {
    console.log(error);
    res.send(error)
  }
});

router.put('/edit.shablon/:id', async (req, res) => {
  try {
    // console.log(req.body);
    const shablonEdit = await Shablon.findOne({ where: { id: req.params.id } });
    const { task1, task2, task3, task4, task5, task8 } = req.body;
    shablonEdit.task1 = task1;
    console.log("🚀🚀🚀🚀🚀 ~ shablonEdit:", shablonEdit)
    
    shablonEdit.task2 = task2;
    shablonEdit.task3 = task3;
    shablonEdit.task4 = task4;
    shablonEdit.task5 = task5;
    shablonEdit.task8 = task8;
    shablonEdit.save();
    res.sendStatus(200)
  } catch (error) {
    console.error(error);
  }
});



// router.get('/', async (req, res) => {
//   try {
//     const user = await User.findOne({ where: { name: req.session.user }, raw: true });
//     const userId = user.id;
//     const MyCoopers = await Shablon.findAll({ where: { userId }, raw: true })
//     renderTemplate(MyLists, { MyCoopers }, res, req);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.get('/edit.shablon', async (req, res) => {
//   renderTemplate(Shablons, {}, res, req);
// });

// router.post('/shablon', async (req, res) => {
//     try {
//         const { task1, task2, task3, task4, task5, employee, userId} = req.body;
//         const newShablon = await Shablon.create({ task1, task2, task3, task4, task5, employee, userId });
//         res.json(newShablon)
//     } catch (error){
//         console.log(error)
//         res.send(error)
//     }
// })



// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Shablon.destroy({ where: { id } });
//     // res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.send(error);
//   }
//   return res.redirect('/mylists');
// });



// router.delete('/entry/:id', async (req, res) => {
//   try {
//     await Entry.destroy({ where: { id: req.params.id } });
//   } catch (error) {
//     console.error(error);
//   }
//   return res.redirect('/all-the-entries');
// });

module.exports = router;