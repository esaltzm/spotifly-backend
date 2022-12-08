const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: String,
    artist: String,
    album: String,
    duration: Number, // in seconds
    genre: String,
    spotifyID: String,
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }]
}, { timestamps: true })

const Song = mongoose.model('Song', songSchema)
module.exports = Song