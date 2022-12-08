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

module.exports = router