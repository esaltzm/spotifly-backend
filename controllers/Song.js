const express = require('express')
const router = express.Router()
const Song = require('../models/Song')

router.get('/', async (req, res, next) => {
    try {
        const songs = await Song.find({})
        res.json(songs)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const song = await Song.findById(req.params.id)
        song ? res.json(song) : res.status(404)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newSong = await Song.create(req.body)
        newSong ? res.status(201).json(newSong) : res.status(422) // 422 (Unprocessable Entity) - missing a required field
    } catch (err) {
        next(err)
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        const deleteSong = await Song.findOneAndDelete({ _id: req.params.id })
        deleteSong ? res.sendStatus(204) : res.sendStatus(404)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updateSong = Song.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        })
        updateSong ? res.status(200).json(updateSong) : res.sendStatus(404)
    } catch (err) {
        next(err)
    }
})

module.exports = router

