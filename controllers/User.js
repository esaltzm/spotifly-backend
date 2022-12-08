//controller
const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.json(users)
    }
    catch (err) {
        next(err)
    }
})

router.get('/:username', async (req, res, next) => {
    try {
        const username = req.params.username
        const user = await User.findOne({username: username})
        res.json(user)
    }
    catch (err) {
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