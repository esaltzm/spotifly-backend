const admin = require('./db/firebaseConfig')

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

module.exports = new FirebaseAuth()