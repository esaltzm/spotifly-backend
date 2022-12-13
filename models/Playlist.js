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
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommunity.spotify.com%2Ft5%2FDesktop-Windows%2FPlaylist-cover-image-not-showing-up-on-playlists-with-mostly%2Ftd-p%2F986220&psig=AOvVaw3iNpkEmtS8dTEgijLYeChp&ust=1671055609287000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMik57HN9_sCFQAAAAAdAAAAABAE'
    }
}, { timestamps: true })

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist