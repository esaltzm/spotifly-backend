const express = require('express')
const cors = require('cors')
const userController = require('./controllers/User')
const playlistController = require('./controllers/Playlist')
const songController = require('./controllers/Song')
const admin = require('./db/firebaseConfig')
const app = express()

class FirebaseAuth {
    async authenticate(req, res, next) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            if (decodeValue) {
                console.log(decodeValue)
                return next()
            }
            return res.json({ message: 'Unauthorized - stop trying to hack our playlists!!' }).sendStatus(401)
        } catch (e) {
            return res.json({ message: 'Internal Server Error' }).sendStatus(500)
        }
    }
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(FirebaseAuth.authenticate)

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
