const express = require('express')
const Playlist = require('../models/Playlist')
const router = express.Router()

router.get('/playlists', async (req, res, next) => {
    try {
        const playlists = await Playlist.find({})
        res.json(playlists)
    } catch (err) {
        next(err)
    }
})

router.get('/playlists/:id', async (req, res, next) => {
    try {
        const playlist = await Playlist.findById(req.params.id)
        res.json(playlist)
    } catch (err) {
        next(err)
    }
})

module.exports = router