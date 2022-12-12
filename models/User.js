const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }]
})

const User = mongoose.model('User', userSchema)
module.exports = User