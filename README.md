# Spotifly Backend

### Description
Node/Express/Mongo Backend for Spotifly, a music streaming app.

Spotifly allows users to seamlessly view playlists, create new playlists, add songs to their playlists and play their favorite songs without advertisements.
Originally meant to integrate Spotify, this app now utilizes embedded Soundcloud iFrames to allow free streaming without an account

Create an account with your email and password, secured with Firebase authentication, to start listening your favorite tunes!

[Deployed App](https://spotifly-ga.vercel.app/)

[Front End Repository](https://github.com/aaixn/spotifly-frontend.git)

### Diagrams
[ERD](https://i.imgur.com/QdFXquA.png)

[Firebase]()

### Req Res Cycle
- GET
    - All users
        - Route: /users/
    - User by email
        - Route: /users/:email
    - All playlists
        - Route: /playlists/
    - Playlist by ID
        - Route: /playlists/:id
    - All songs
        - Route: /songs/
    - Song by ID
        - Route: /songs/:id
- POST
    - New song
        - Route: /songs/
    - New playlist
        - Route: /playlists/
    - New user
        - Route: /users/
- PUT
    - Add playlist to user
        - Route: /users/:email/add
    - Remove playlist from user
        - Route: /users/:email/remove
    - Edit playlist name or image
        - Route: /playlists/:id
    - Add song to playlist
        - Route: /playlists/:id/add
    - Remove song from playlist
        - Route: /playlists/:id/remove
    - Edit song information
        - Route: /songs/:id
- DELETE
    - Remove song
        - Route: /songs/:id
    - Remove playlist
        - Route: /:id

### Problems Encountered + Their Solutions

- Seeding three related models with data proved difficult - initially, each asynchronous seed function within seed.js was finished executing at random times, resulting in only some of the data being seeded. The solution to this problem was to put each individual seed function within an asynchronous main function, with awaits ensuring that each step was executed before beginning the next step of the seeding process.

        const main = async () => {
            await addUsers()
            await addPlaylists()
            await addSongs()
            await linkSongsToPlaylist()
            await linkPlaylistsToUser()
            process.exit()
        }

- Implementing Firebase authentication using this [tutorial](https://blog.devgenius.io/firebase-authentication-with-custom-node-js-express-backend-2ae9c04571b5) had one bug - there was no method of catching when no authentication was provided with a request from the front end, which would result in an internal server error. To fix this, the following code was added to the authentication middleware to exit the process before attempting to authenticate without a token.

        let token
        if (req.headers.authorization) {
            console.log(req.headers)
            token = req.headers.authorization.split(' ')[1]
        } else {
            return res.status(401).json({ message: 'No authentication provided' })
        }

### Future Improvements

- Currently with firebase authentication, authorized users can access any data in this app's database. Limits on data access could be implemented even after authentication - for example, users would only be able to access their own playlists from the database.

- These two paths: PUT users/:email/add and PUT playlists/:id/add. As it stands now, these routes can only add an existing playlist to a user or add an existing song to a playlist. To add a new playlist or song, there is a two step protocol involving a POST then PUT, which could be streamlined to a single step through a PUT request.
