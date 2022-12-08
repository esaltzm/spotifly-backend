const Playlist = require('../models/Playlist')
const User = require('../models/User')
const Song = require('../models/Song')
const data = require('./seedData.json')

// Add playlists to their user

const playlistsWithUser = []

data.forEach(user => {
    user.playlists.forEach(playlist => {
        playlistsWithUser.push({ ...playlist, user: user.username })
    })
})

playlistsWithUser.forEach(playlist => {
    Playlist.findOne({ name: playlist.name })
        .then(found => {
            return User.findOneAndUpdate(
                { username: playlist.user },
                { $push: { playlists: found._id } },
                { new: true }
            )
        })
        .catch(console.error)
        .finally(() => {
            process.exit()
        })
})