const express = require('express')
const router = express.Router()
const Song = require('../models/Song')

router.post('/playlist/:id', async (req, res) => {
    try {
        const newSong = await Song.create(req.body)
        res.status(201).json(newSong)
    } catch (err) {
        next(err)
    }
})

router.delete('/song/:id', async (req, res) => {
    try {
        const deleteSong = await Song.findOneAndDelete({ _id: req.params.id })
        if (deleteSong) {
            res.sendStatus(204)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router