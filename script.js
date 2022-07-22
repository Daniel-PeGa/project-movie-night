//New York Times movie review info
//var nytKey = "&api-key=MaQgrhzm0bWhoTQZXafGplCBCmjaWwKI";
//var nytUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
//the Movie data base info
var tmdbKey = "api_key=9057cf76a0f4698dd3c5d50c15b617fc";
var tmdbUrl = "https://api.themoviedb.org/3/movie/550?query=";
//TODO: add key and URL for movie quotes
var movieList = $(".historyList");
var btnForm = $(".btn");
var userinput = btnForm.textContent;
var movieArray = JSON.parse(localStorage.getItem("Saved Movie")) || [];

//TODO: When random button gets pressed generates random movie id
//TODO: From random id fetch into the API
//TODO: Make a variable for ID into localstorage and pull it out
//TODO: Pull ID number from Dune and put it into TMDB API
//TODO: Display movie info from TMDB API

//https://the-dune-api.herokuapp.com/quotes


// allows to grab movie id from dune API NOT WORKING CORRECTLY
let movieId = {
    fetchMovieId: function (){
        fetch(
            'https://the-dune-api.herokuapp.com/quotes'
            ).then((response) => response.json())
            .then((data) => this.pullMovieId(data));

    },
    pullMovieId: function(data) {
        var { id }  = data.id;
        console.log(id)
    }
};




function movieQuote(){
    fetch();
}


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

console.log("https://the-dune-api.herokuapp.com/quotes");


//! below is incompletefunction for last viewed movie
function lastSearch () {
    movieList.empty()
    for (var i = 0; i < movieArray.length; i ++) {
        var newButton = $("<button>").attr("type", "button").attr("class","savedBtn button bg-secondary is-large");
        newButton.attr("data-name", movieArray[i])
        newButton.text(movieArray[i]);
        movieList.prepend(newButton);
    }
    $(".savedBtn").on("click", function(event){
        event.preventDefault();
        var userInput = $(this).data("name");
    })

}

//sets last viewed movie to storage
function storeData () {
    localStorage.setItem("Saved Movie", JSON.stringify(movieArray));
}
//!above is to be finished later

