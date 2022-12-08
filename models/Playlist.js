const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: String,
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
}, { timestamps: true })

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist