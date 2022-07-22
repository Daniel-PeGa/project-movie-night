//New York Times movie review info
var nytKey = "&api-key=MaQgrhzm0bWhoTQZXafGplCBCmjaWwKI";
var nytUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
//the Movie data base info
var tmdbKey = "api_key=9057cf76a0f4698dd3c5d50c15b617fc";
var tmdbUrl = "https://api.themoviedb.org/3/movie/550?query=";
//either this
var btn1 = $("#mood1");
var btn2 = $("#mood2");
var btn3 = $("#mood3");
var btn4 = $("#mood4");
var btn5 = $("#mood5");
var btn6 = $("#mood6");
//or this not both
var btnForm = $(".btn");
var userinput = btnForm.textContent;

//TODO: Base framework for api search on TMDB
function randomMovie(){
    fetch(tmdbKey + userInput + tmdbUrl);
    var data = response.json();
    showRandomMovie(data.results);
}

function showRandomMovie() {

}

//TODO: Base framework for api search on TMDB 
//!will need to be based on movie picked from TMDB
function movieReview(){
    fetch(nytKey + userInputTwo + nytUrl);
}
