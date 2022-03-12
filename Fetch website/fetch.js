

var FetchStream = require("fetch").FetchStream;

var fetch = new FetchStream("https://www.google.com/finance/");

fetch.on("data", function(chunk){
    console.log(chunk);
});