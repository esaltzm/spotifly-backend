const express = require('express')
const Playlist = require('../models/Playlist')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const playlists = await Playlist.find({})
        res.json(playlists)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const playlist = await Playlist.findById(req.params.id)
        res.json(playlist)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newPlaylist = await Playlist.create(req.body)
        res.status(201).json(newPlaylist)
    } catch (err) {
        next(err)
    }
})

module.exports = router