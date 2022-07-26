//New York Times movie review info
//var nytKey = "&api-key=MaQgrhzm0bWhoTQZXafGplCBCmjaWwKI";
//var nytUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
//the Movie data base info

var testThis = "https://api.themoviedb.org/3/movie/105?api_key=9057cf76a0f4698dd3c5d50c15b617fc&language=en-US";
//! 77 is the temporary movie ID it will be changed based on secondary API (movieID)
var imageUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
var exampleImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5Xsu2o5IsZRuuxCEVZ9nVve21FP.jpg"
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
        .then(function (quoteResponse){
            console.log(quoteResponse)
            movieID = quoteResponse[0].id;
            movieQuote = quoteResponse[0].quote;
            console.log(movieID);
            console.log(movieQuote);
            //throw quoteResponse.json();
        });
}
    function movieQuery(){
        fetch(testThis)
            .then(function (otherResponse){
                console.log(otherResponse);
                return otherResponse.json();
            })
            .then(function (movieResponse){
                var movieTitle = movieResponse.title;
                console.log(movieTitle);
            })
    }

btnForm.on("click", quoteQuery(), movieQuery());
console.log(movieID)

//TODO: Base framework for api search on TMDB
var tmdbKey = "9057cf76a0f4698dd3c5d50c15b617fc";
var imgURL = "https://image.tmdb.org/t/p/w500";

var randomIDGenerator = Math.floor(Math.random() * 999);
function getData() {
    fetch("https://api.themoviedb.org/3/movie/"+randomIDGenerator+"?api_key="+tmdbKey+"&language=en-US")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var movieTitle = document.getElementById("title");
        var moviePoster = document.getElementById("poster");
        movieTitle.innerHTML = data.title;
        moviePoster.setAttribute("src", imgURL.concat(data.poster_path));
    })
    .catch(() => {
        console.log("Oops! Try again later!");
    })
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
// function lastSearch () {
    // movieList.empty()
    // for (var i = 0; i < movieArray.length; i ++) {
        // var newButton = $("<button>").attr("type", "button").attr("class","savedBtn button bg-secondary is-large");
        // newButton.attr("data-name", movieArray[i])
        // newButton.text(movieArray[i]);
        // movieList.prepend(newButton);
    // }
    // $(".savedBtn").on("click", function(event){
        // event.preventDefault();
        // var userInput = $(this).data("name");
    // })

// }

//sets last viewed movie to storage
// function storeData () {
    // localStorage.setItem("Saved Movie", JSON.stringify(movieArray));
// }
//!above is to be finished later

// This is me trying my best //
// This one down here is getting the information on the movie that shows up in the screen

