const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    artist: [{
        type: String,
        required: true
    }],
    album: [{
        type: String,
        required: true
    }],
    duration: {
        type: Number,
        required: true
    }, // in seconds
    genre: [{
        type: String,
        required: true
    }],
    spotifyID: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Song = mongoose.model('Song', songSchema)
module.exports = Song