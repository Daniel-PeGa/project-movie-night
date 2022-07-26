//New York Times movie review info
//var nytKey = "&api-key=MaQgrhzm0bWhoTQZXafGplCBCmjaWwKI";
//var nytUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
//the Movie data base info

var testThis = "https://api.themoviedb.org/3/movie/77?api_key=9057cf76a0f4698dd3c5d50c15b617fc&language=en-US";
//! 77 is the temporary movie ID it will be changed based on secondary API (movieID)

var quoteUrl = "https://the-dune-api.herokuapp.com/quotes"
var tmdbKey = "api_key=9057cf76a0f4698dd3c5d50c15b617fc";
var tmdbUrl = "https://api.themoviedb.org/3/movie/550?query=";
//TODO: add key and URL for movie quotes
var movieList = $(".historyList");
var btnForm = $(".btn");
//!if we go back to using nytAPI this needs to be user input  
var userInput = btnForm.textContent;
var movieArray = JSON.parse(localStorage.getItem("Saved Movie")) || [];

//to be filled in by fetch requests
var movieID = 77;
var movieQuote;

//TODO: When random button gets pressed generates random movie id
//TODO: From random id fetch into the API
//TODO: Make a variable for ID into localstorage and pull it out
//TODO: Pull ID number from Dune and put it into TMDB API
//TODO: Display movie info from TMDB API

//https://the-dune-api.herokuapp.com/quotes


//API works but does not pull correct data from the array
// fetch for the quote API
function quoteQuery(){
    fetch(quoteUrl)
        .then(function (response) {
             console.log(response);
             return response.json();
           
        })
        //.then((res) => res.json())
        //.then(leftShoe => console.log(leftShoe))
        .then(function (quoteResponse){
            console.log(quoteResponse)
            movieID = quoteResponse[0].id;
            movieQuote = quoteResponse[0].quote;
            console.log(movieID);
            console.log(movieQuote);
        })
};
btnForm.on("click", quoteQuery());
console.log(movieID)

//TODO: Base framework for api search on TMDB
function randomMovie(){
    fetch(tmdbKey + userInput + tmdbUrl);
    var data = response.json();
    showRandomMovie(data.results);
}

function showRandomMovie() {

}

function getMovieReview() {
    console.log("http://api.nytimes.com/svc/movies/v2/reviews/search.json?critics-pick=Y&order=by-publication-date&api-key=MaQgrhzm0bWhoTQZXafGplCBCmjaWwKI");
}
btnForm.on("click", getMovieReview());

//TODO: Base framework for api search on TMDB 
//!will need to be based on movie picked from TMDB
//function movieReview(){
//    fetch(nytKey + userInputTwo + nytUrl);
//}


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

