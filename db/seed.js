const Playlist = require('../models/Playlist')
const User = require('../models/User')
const Song = require('../models/Song')
const data = require('./seedData.json')

// Create empty users

const users = data.map(user => {
    return {
        username: user.username,
        playlists: []
    }
})

User.deleteMany({}).then(() => {
    User.create(users).then(users => {
        // console.log(users)
        process.exit()
    })
})

// Create empty playlists

const playlists = []
data.forEach(user => {
    user.playlists.forEach(playlist => playlists.push(playlist))
})
const emptyPlaylists = playlists.map(playlist => {
    return {
        name: playlist.name,
        songs: []
    }
})

Playlist.deleteMany({}).then(() => {
    Playlist.create(emptyPlaylists).then(playlists => {
        // console.log(playlists)
        process.exit()
    })
})

// Create songs

const songs = []

data.forEach(user => {
    user.playlists.forEach(playlist => {
        playlist.songs.forEach(song => songs.push(song))
    })
})

Song.deleteMany({}).then(() => {
    Song.create(songs).then(songs => {
        // console.log(songs)
        process.exit()
    })
})

