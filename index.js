const express = require('express')
const cors = require('cors')
const userController = require('./controllers/User')
const playlistController = require('./controllers/Playlist')
const songController = require('./controllers/Song')
const firebaseAuth = require('./authMiddleware')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(firebaseAuth.authenticate)

app.get('/', (req, res) => {
    res.redirect('/api/users')
})

app.use('/api/users/', userController)
app.use('/api/playlists/', playlistController)
app.use('/api/songs', songController)

app.set('port', process.env.PORT || 8080)

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
})
