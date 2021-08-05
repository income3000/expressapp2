
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')



router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const commentData = req.body
    Event.findOne({
          'comments._id': id,
        })
    .then(Event => {
        const comment = event.comments.id(id)
        comment.set(commentData)
        return Event.save()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})



router.post('/:id', async (req, res) => {
	try{
        const commentData = req.body
		const Event = await Event.findById(req.params.id) 
        Event.comments.unshift(commentData);
        const updatedComment = await Event.save();
		res.status(201).json(updatedComment);
	}catch(err){
		console.log(err)
	}
});




router.delete('/:id', async(req, res) => {
    try{
        const id = req.params.id;
        const Event = await Event.findOne({'comments._id' : id})
        Event.comments.id(id).remove()
        const eventDelete = await Event.save()
        res.sendStatus(204)
    } catch (err){
        console.log(err)
    }
})


module.exports = router