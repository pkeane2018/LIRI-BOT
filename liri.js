require("dotenv").config();

var keys = require('./keys.js');

var Spotify = require('node-spotify-api');

var appname = process.argv[2];

var keyword = process.argv[3];

if ((appname == "spotify-this-song") && (typeof keyword !== 'undefined')) {

    var spotify = new Spotify ({

        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
   
    console.log(keyword);

    spotify.search({type: 'track', query: keyword}, function(err, data) {
    
        if (err) {
    
            return console.log('Error occurred; ' + err);
        };
        
        var songs = data.tracks.items;
    
        for (i = 0; i < songs.length; i++) {
            
            console.log("Song name: " + songs[i].name);
            console.log("Artist: " + songs[i].artists[0].name);
            console.log("Album: " + songs[i].album.name);
            console.log("Link to preview of the song (if avaialble): " + songs[i].preview_url);
            console.log("-----------");
    
        }
    })

}

else if ((appname == "spotify-this-song") && (typeof keyword == 'undefined')) {

    var spotify = new Spotify ({

        id: keys.spotify.id,
        secret: keys.spotify.secret
    });
    
    spotify.search({type: 'track', query: 'The Sign' }, function(err, data) {
    
        if (err) {
    
            return console.log('Error occurred; ' + err);
        };
        
        var songs = data.tracks.items;
    
            for (i = 0; i < songs.length; i++) {
            
                if ((songs[i].artists[0].name) == "Ace of Base") {
                    
                console.log("Song name: " + songs[i].name);
                console.log("Artist: " + songs[i].artists[0].name);
                console.log("Album: " + songs[i].album.name);
                console.log("Link to preview of the song (if avaialble): " + songs[i].preview_url);
                console.log("-----------");
        
            }

        }

        
    })
}

else {

    console.log("NAH BRO");
}

