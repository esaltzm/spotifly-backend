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

router.get('/:email', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.params.email }).populate('playlists')
        user ? res.json(user) : res.sendStatus(404)
    }
    catch (err) {
        next(err)
    }
})

router.put('/:email/add', async (req, res, next) => {
    try {
        let playlistToAdd
        const user = await User.findOne({ email: req.params.email })
        req.body._id
            ? playlistToAdd = await Playlist.findById(req.body._id)
            : res.sendStatus(404)
        const newPlaylists = [...user.playlists, playlistToAdd]
        const updatedUser = await User.findOneAndUpdate(
            { email: req.params.email },
            { playlists: newPlaylists },
            { new: true }
        )
        updatedUser ? res.status(201).json(updatedUser) : res.sendStatus(404)
    } catch (err) {
        next(err)
    }
})

router.put('/:email/remove', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.params.email })
        const newPlaylists = [...user.playlists].filter(playlist => playlist._id != req.body._id)
        const updatedUser = await User.findOneAndUpdate(
            { email: req.params.email },
            { playlists: newPlaylists },
            { new: true }
        )
        updatedUser ? res.status(201).json(updatedUser) : res.sendStatus(404)
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

// router.delete('/:email', async (req, res, next) => {
//     try {
//         const email = req.params.email
//         const deleteUser = await User.findOneAndDelete({email: email})
//         res.json(deleteUser)
//     }
//     catch {
//         next(err)
//     }
// })

module.exports = router