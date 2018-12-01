require("dotenv").config();

var keys = require('./keys.js');

var Spotify = require('node-spotify-api');

var axios = require('axios');

var moment = require('moment');

var fs = require("fs");

var inputArray;

var appname = process.argv[2];

var keyword = process.argv[3];

console.log(process.argv);

if (appname == 'do-what-it-says') {

    console.log("how now brown cow");
    
    fs.readFile("random.txt", "utf8", function(error, data){
 
        if (error) {
    
            console.log(error);
        } 
    
        inputArray = data;
        console.log(inputArray);

    var terms = inputArray.split(",");

    for (i = 0; i < terms.length; i++) {
    
        appname = terms[0];
        process.argv[3] = terms[1];
        keyword = terms[1];

      }
    
    })

    everything();

}

else {

    everything();
};

function everything() {

    console.log(inputArray);

    if ((appname == "spotify-this-song") && (typeof keyword !== 'undefined')) {
    
        var spotify = new Spotify ({
    
            id: keys.spotify.id,
            secret: keys.spotify.secret
        });
       
        console.log(keyword);
    
        var input = process.argv;
    
        keyword = "'" ;
        
        for (var i = 3; i < input.length; i++) {
    
            
            if (i > 3 && i < input.length) {
                
                keyword = keyword + "+" + input[i];
               
            }
        
            else {
    
            keyword = keyword + input[i];
            console.log("HOOCHY MAMA!");
        
            }
        
        }
    
        keyword = keyword + "'";
    
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
    
    else if ((appname == 'movie-this') && (typeof keyword !== 'undefined')) {
    
        var input = process.argv;
    
        keyword = " ";
        
        for (var i = 3; i < input.length; i++) {
    
            if (i > 3 && i < input.length) {
              keyword = keyword + "+" + input[i];
            }
            else {
              keyword = input[i];
          
            }
          }
    
        var searchUrl = "http://www.omdbapi.com/?t=" + keyword + "&y=&plot=short&apikey=trilogy"
    
        axios.get(searchUrl).then(
            function(response) {
                
                console.log("Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("IMDB rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
                console.log("Country (or countries) of production: " + response.data.Country);
                console.log("Language(s): " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("------");
            })
    }
    
    else if ((appname == 'movie-this') && (typeof keyword == 'undefined')) {
    
        var searchUrl = "http://www.omdbapi.com/?t='Mr.+'Nobody&y=&plot=short&apikey=trilogy"
    
        axios.get(searchUrl).then(
            function(response) {
                
                console.log("Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("IMDB rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
                console.log("Country (or countries) of production: " + response.data.Country);
                console.log("Language(s): " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("------");
            })
    }  
    
    else if ((appname == 'concert-this') && (typeof keyword !== 'undefined'))  {
    
        var input = process.argv;
    
        keyword;
        
        for (var i = 3; i < input.length; i++) {
    
            if (i > 3 && i < input.length) {
              keyword = keyword + "+" + input[i];
             
            }
            else {
              keyword = input[i];
          
            }
          }
        
        searchUrl = "https://rest.bandsintown.com/artists/" + keyword + "/events?app_id=codingbootcamp";
    
        axios.get(searchUrl).then(
            function(response) {
    
            var events = response.data;
            
            for (i = 0; i < events.length; i++) {
    
                console.log("Venue Name: " + events[i].venue.name);
                console.log("Location: " + events[i].venue.city + ", " + events[i].venue.country);
                console.log("Date: " + moment(events[i].datetime).format("MM/DD/YYYY"));
                console.log("-------------");
            }
    
                
            })
    }
    
    else if ((appname == 'concert-this') && (typeof keyword == 'undefined')) {
    
        console.log("Please choose an artist to search for");
     }
    
    
    else {
    
        console.log("Please choose a command");
        }
    

}






 