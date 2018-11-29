require("dotenv").config();

var keys = require("keys.js");

var Spotify = new Spotify(keys.spotify);

console.log(Spotify);