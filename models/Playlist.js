const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    image: {
        type: String,
        default: 'https://i.imgur.com/4KZS4Le.png'
    }
}, { timestamps: true })

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist