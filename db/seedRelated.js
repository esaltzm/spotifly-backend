const Playlist = require('../models/Playlist')
const User = require('../models/User')
const Song = require('../models/Song')
const data = require('./seedData.json')

// Add songs to their playlist

const songsWithPlaylist = []
data.forEach(user => {
    user.playlists.forEach(playlist => {
        playlist.songs.forEach(song => songsWithPlaylist.push({ ...song, playlistName: playlist.name }))
    })
})

songsWithPlaylist.forEach(song => {
    Song.findOne({ name: song.name })
        .then(found => {
            return Playlist.findOneAndUpdate(
                { name: song.playlistName },
                { $push: { songs: found._id } },
                { new: true }
            )
        })
        .then(console.log)
        .catch(console.error)
        .finally(() => {
            process.exit()
        })
})