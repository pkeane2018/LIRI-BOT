# LIRI-BOT

The LIRI BOT-9000 is a command-line application that allows users to search for information on movies, songs, and bands. The application utilzes four commands - 'spotify-this-song', 'movie-this', 'concert-this', and 'do-what-it-says'. Entering 'spotify-this-song' followed by the name of a song returns information on the song from the Spotify API, as well as a preview link for the song, if available. Entering 'movie-this' followed by a movie title returns information on the movie from the OMDB API. Entering 'concert-this' followed by an artist or band returns touring and concert information on the artist or band from the Bandsintown API. Finally, entering 'do-what-it-says' will retrieve text from a text file called random.txt., which consists of the name of one of the other three commands and a search term; it will then execute the command with that search term. The code in this application could perhaps be simplified while preserving the same functionality, such as by using fewer if-then statements in the everything function. 