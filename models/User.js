const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }]
})

const User = mongoose.model('User', userSchema)
module.exports = User