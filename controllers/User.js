//controller
const express = require('express')
const User = require('../models/User')
const Playlist = require('../models/Playlist')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({}).populate('playlists')
        res.json(users)
    }
    catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id).populate('playlists')
        user ? res.json(user) : res.sendStatus(404)
    }
    catch (err) {
        next(err)
    }
})

router.put('/:id/remove', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        const newPlaylists = [...user.playlists].filter(playlist => playlist._id != req.body._id)
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { playlists: newPlaylists },
            { new: true }
        )
        updatedUser ? res.status(201).json(updatedPlaylist) : res.sendStatus(404)
    } catch (err) {
        next(err)
    }
})

// router.post('/', async (req, res, next) => {
//     try {
//         const newUserInfo = req.body
//         const newUser = await User.create(newUserInfo)
//         res.json(newUser)
//     }
//     catch (err) {
//         next(err)
//     }
// })

// router.delete('/:username', async (req, res, next) => {
//     try {
//         const username = req.params.username
//         const deleteUser = await User.findOneAndDelete({username: username})
//         res.json(deleteUser)
//     }
//     catch {
//         next(err)
//     }
// })

module.exports = router