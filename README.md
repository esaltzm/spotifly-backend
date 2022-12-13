# Spotifly Backend

### Description
Node/Express/Mongo Backend for Spotifly, a music streaming app.

Spotifly allows users to seamlessly view playlists, create new playlists, add songs to their playlists and play their favorite songs without advertisements.

Create an account with your email and password to start streaming your favorite tunes!

[Spotifly Frontend](https://github.com/aaixn/spotifly-frontend.git)


### Models

- Playlist
    - Name object
    - Array of songs -reference Song model
- Song
    - Name object
    - Array of artists
    - Array of albums
    - Duration object
    - Array of genres 
    - Soundcloud object
    - Timestamp
- User
    - Username object
    - Array of playlists - refernece Playlist model

### Diagrams
- [ERD] (https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled.drawio#R7Zrbbts4EIafxpctdLZ9GdtJ2kXaDeLtbm9piZaIUqRA0XGcp9%2BhROpQRqlRJBGKKDACcTg8DT9SP03P%2FHX%2BcC1QkX3hCaYzz0keZv5m5nnLIIL%2FynCqDZExpIIktcltDVvyiLXR0dYDSXDZc5ScU0mKvjHmjOFY9mxICH7su%2B057bdaoBRbhm2MqG39jyQy01bXcdqMT5ikmW56EeqMHYp%2FpIIfmG6PcYbrnByZarRrmaGEHzsm%2F3LmrwXnsn7KH9aYqqiaiNXlrgZymy4LzOQ5BeaLZeS64XLvRHi5wIsP7ryu4h7Rg47DtxIL3Vt5MsEpjySnCMblrzKZUzC68LjnTG61k0ojSlIGzzF0ByrxV%2FdYSAIhvtAZkhdgjTNCkxt04gfV6VJC%2FExqlXFBHqFaZNqAbCE1LV7U89iqkmB2wCpwCT63JhJuY7pBpdQ%2BMacUFSXZNR3OkUgJW3Epea6dzEivCKVrTrmoAuDvqz9Vq5ponBhvM6F1%2FTmJ9TNFO0xXDRmmpooNNSjBfzSYVaHsNKedVHSvUE6oWlD%2FYpEghkzQ63i4ng2AZkJFHj90TBqIa8xzLMUJXMzC1WzqZbvw6%2BSxswYi7ZJ18AeY9NrT6y5tam4BhAfN4Jk8Nt3v88hQDqkLyNhKQVhq8QljlX026xD%2FHFI7yoZZivdykNiyQDE0e1P5bILWcqcDokzHjEi8Bbvq0xH2SLBxqG9PK0IykiSYVQRJJFENoUKl4ITJKojhCj4Q67XzMZyFMK41pN02DR%2FlLuSaMxgfItWkYyD8iBXlKxuH4RX%2Fa0A0EV50JhHRawDhW0DcorI8cpFMQIwEROiNCURoA0HRiZJShUwRASEylipmExlvRsZ8MSIZrudZk40T0Hg6iemOHy9bQxeBX72uQYMoQWDe%2Bh1N4ipNgllyoSQopC%2FvHrHg%2F%2FAviJ3qnE5BSHWLnfWGh1Kq45AwwJkeDDQ5qAlKfhAxHoier6cJKk7xEBGB3o1VWJ%2FlQWCKJLnvS%2BsXnW3T3yf2gUm9vh%2F1Gvi%2FKV%2FnryFffVu%2Bfp2k60u9j5ol%2F2dIV9%2BzYNhylrYqRaUmhfK2RIyqXX37MLNBUm8PkuQwbpQXEw9vyMOoijWweaj2hEm%2FvBv9Mg9%2BT7%2B4y9fQL0FgAXkBDKk5nBTMC%2BxPzYL%2FMxRMYH%2FXsjkIONhxVgPx9ZDvnrgtmIB4PSBGFTDB0t4f6O6QT9vDSDSMKl9C%2ByuYa8zEdNwdiwbXCcbEwT7vTl9%2BjEmDOQ29BQ23YV5Icvf9r8L7vnnceg7NxAf3ifNNwSXZq15%2B3kxknEuGNelnwTJMRjimqnSb%2B4h3d0%2BTI5b8XXV18Oj47CWNuZF79pLGLPuXu6TRRW8V1u3R1Qv7R1cvXH5cLDw%2F9JaB684jP%2BzXWI9MV%2FITP02vnkIKku1PpGr39hdo%2FuX%2F)

- [Firebase] ()

### Req Res Cycle
- GET
    - User by email
        - Route: /users/:email
    - Playlists by ID
        - Route: /playlists/:id
    - Songs by ID
        - Route: /songs/:id
- POST
    - Songs added to playlist
    - Playlists
        - Route: /playlists/
- PUT
    - Playlist name
        - Route: /playlists/:id
    - Song to playlist
        - Route: /playlists/:id/add
    - Remove song from playlists
        - Route: /playlists/:id/remove
    - Song information
- DELETE
    - Songs
    - Playlists
        - Route: /:id