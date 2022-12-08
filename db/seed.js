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

const addUsers = async () => {
    await User.deleteMany({})
    const newUsers = await User.create(users)
    console.log(newUsers)
}

addUsers()

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

const addPlaylists = async () => {
    await Playlist.deleteMany({})
    const newPlaylists = Playlist.create(emptyPlaylists)
    console.log(newPlaylists)
}

addPlaylists()

// Create songs

const songs = []

data.forEach(user => {
    user.playlists.forEach(playlist => {
        playlist.songs.forEach(song => songs.push(song))
    })
})

const addSongs = async () => {
    await Song.deleteMany({})
    const newSongs = await Song.create(songs)
    console.log(newSongs)
}

addSongs()

// Add songs to their playlist

// const songsWithPlaylist = []
// data.forEach(user => {
//     user.playlists.forEach(playlist => {
//         playlist.songs.forEach(song => songsWithPlaylist.push({ ...song, playlistName: playlist.name }))
//     })
// })

// songsWithPlaylist.forEach(song => {
//     console.log(song)
//     Song.findOne({ name: song.playlistName })
//         .then(found => {
//             console.log(found)
//             return Playlist.findOneAndUpdate(
//                 { name: song.playlistName },
//                 { $push: { songs: found._id } },
//                 { new: true }
//             )
//         })
//         .then(console.log)
//         .catch(console.error)
//         .finally(() => {
//             process.exit()
//         })
// })