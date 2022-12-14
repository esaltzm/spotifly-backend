const admin = require('firebase-admin');
const dotenv = require('dotenv')
dotenv.config()

const serviceAccount = {
    type: "service_account",
    project_id: "spotifly-2ef38",
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: JSON.parse(process.env.FIREBASE_PRIVATE_KEY).privateKey,
    client_email: "firebase-adminsdk-rloi1@spotifly-2ef38.iam.gserviceaccount.com",
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rloi1%40spotifly-2ef38.iam.gserviceaccount.com"
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

module.exports = admin