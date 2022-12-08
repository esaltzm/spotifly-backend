const User = require('../models/User')
// const Playlist = require('../models/Playlist')
// const Song = require('../models/Song')
const data = require('./seedData.json')

const users = data.map(user => {
    return {
        username: user.username,
        playlists: []
    }
})

User.deleteMany()
  .then(() => User.insertMany(users))
  .then(console.log)
  .catch(console.error)
  .finally(process.exit)
