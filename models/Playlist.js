const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    name: String,
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }]
}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User