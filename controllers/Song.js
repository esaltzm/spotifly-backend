const express=require('express')
const router=express.Router()
const Song=require('../models/Song')

router.post('/:id/create', async (req, res, next) => {
    try {
        const newSong = await Song.create(req.body)
        res.status(201).json(newSong)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id/delete', async (req, res, next)=> {
    try {
        const deleteSong = await Song.findOneAndDelete({_id: req.params.id})
        if (deleteSong) {
            res.sendStatus(204)
        }
    } catch (err) {
        next(err)
    }
})

router.put('/:id/update', async (req, res, next)=> {
    try {
        const updateSong= Song.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true
        })
        if(updateSong) {
            res.json(updateSong)
        } else (
            res.sendStatus(404)
        )
    } catch (err) {
        next(err)
    }
})