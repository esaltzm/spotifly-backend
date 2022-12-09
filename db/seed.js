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
    console.log('newusers:', newUsers)
    return newUsers
}

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
    console.log("newplaylists:", newPlaylists)
    return newPlaylists
}

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
    console.log("newSongs:", newSongs)
    return newSongs
}

// Add songs to their playlist

const songsWithPlaylist = []

data.forEach(user => {
    user.playlists.forEach(playlist => {
        playlist.songs.forEach(song => songsWithPlaylist.push({ ...song, playlistName: playlist.name }))
    })
})

const linkSongsToPlaylist = async () => {
    for (let song of songsWithPlaylist) {
        const found = await Song.findOne({ name: song.name })
        const updatedPlaylist = await Playlist.findOneAndUpdate(
            { name: song.playlistName },
            { $push: { songs: found._id } },
            { new: true }
        )
        console.log(updatedPlaylist)
    }
}

// Add playlists to their user

const playlistsWithUser = []

data.forEach(user => {
    user.playlists.forEach(playlist => {
        playlistsWithUser.push({ ...playlist, user: user.username })
    })
})


const linkPlaylistsToUser = async () => {
    for (let playlist of playlistsWithUser) {
        const found = await Playlist.findOne({ name: playlist.name })
        const updatedUser = await User.findOneAndUpdate(
            { username: playlist.user },
            { $push: { playlists: found._id } },
            { new: true }
        )
        console.log(updatedUser)
    }
}

const main = async () => {
    await addUsers()
    await addPlaylists()
    await addSongs()
    await linkSongsToPlaylist()
    await linkPlaylistsToUser()
    process.exit()
}

main()

