const express = require('express');
const router = express.Router();
const { Shablon } = require('../../db/models')
const Shablons = require('../views/Shablon');
const renderTemplate = require('../lib/renderTemplate');

router.get('/shablon', async (req, res) => {

  renderTemplate(Shablons, {}, res, req);
});

router.post('/shablon', async (req, res) => {
    try {
        const { task1, employee, task8, userId} = req.body;
        const newShablon = await Shablon.create({ task1, employee, task8, userId });
        res.json(newShablon)
    } catch (error){
        console.log(error)
        res.send(error)
    }
})

// router.post('/shablon', async (req, res) => {
//     try {
//         const {task1, employee, task8, userId} = req.body;
//         const newShablon = await Shablon.create({task1, employee, task8, userId});
//         res.redirect('/shablon');
//     } catch (error){
//         console.log(error)
//         res.send(error)
//     }
// })

module.exports = router;
