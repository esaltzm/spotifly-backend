const admin = require('./db/firebaseConfig')

class FirebaseAuth {
    async authenticate(req, res, next) {
        let token
        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1]
        } else {
            return res.status(401).json({ message: 'No authentication provided' })
        }
        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            if (decodeValue) {
                console.log(decodeValue)
                return next()
            }
            return res.status(401).json({ message: 'Unauthorized - stop trying to hack our playlists!!' })
        } catch (err) {
            console.log(err)
            return err.code === 'auth/argument-error'
                ? res.status(401).json({ message: err.message })
                : res.status(500).json({ message: 'Internal Server Error' })
        }
    }
}

module.exports = new FirebaseAuth()