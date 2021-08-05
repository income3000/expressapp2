const express = require('express');
const router = express.Router();
const { Error } = require('mongoose');
const Event = require('../models/eventSchema')


router.get('/', async (req,res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch(err){
        console.log(err);
    }
});

router.get('/:id', async (req,res) => {
    const events = await Event.findById(req.params.id);
    res.json(events)
});

router.put('/:id', async (req, res) => {
    const events = await Event.findByIdAndUpdate(req.params.id);
    res.json(events)

})
router.post('/', async (req, res) => {
    const newEvent = await Event.create(req.body)
    res.json(newEvent)
})
router.delete('/:id', async (req,res) => {
    const events = await Event.findByIdAndDelete(req.params.id);
    res.status(201).json(events)
})




module.exports = router