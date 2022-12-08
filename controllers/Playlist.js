const express = require('express')
const Playlist = require('../models/Playlist')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const playlists = await Playlist.find({}).populate('songs')
        res.json(playlists)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const playlist = await Playlist.findById(req.params.id).populate('songs')
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

router.delete('/:id', async (req, res, next) => {
    try {
        const deletedPlaylist = await Playlist.findByIdAndDelete(req.params.id)
        deletedPlaylist ? res.sendStatus(204) : res.sendStatus(404)
    } catch (err) {
        next(err)
    }
})

router.put('/:id/add', async (req, res, next) => {
    try {
        const playlist = await Playlist.findById(req.params.id)
        const newSongs = [...playlist.songs, req.body.song]
        const updatedPlaylist = await Playlist.findByIdAndUpdate(
            req.params.id,
            { songs: newSongs },
            { new: true }
        )
        updatedPlaylist ? res.status(201).json(updatedPlaylist) : res.sendStatus(404)
    } catch (err) {
        next(err)
    }
})

router.put('/:id/remove', async (req, res, next) => {
    try {
        const playlist = await Playlist.findById(req.params.id)
        const song = playlist.find(song => song._id === req.body.song._id)
        const newSongs = [...playlist].splice(playlist.indexOf(song), 1)
        const updatedPlaylist = await Playlist.findByIdAndUpdate(
            req.params.id,
            { songs: newSongs },
            { new: true }
        )
        updatedPlaylist ? res.status(201).json(updatedPlaylist) : res.sendStatus(404)
    } catch (err) {
        next(err)
    }
})

module.exports = router