//New York Times movie review info
//var nytKey = "&api-key=MaQgrhzm0bWhoTQZXafGplCBCmjaWwKI";
//var nytUrl = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
//the Movie data base info
var availilityApi = "http://api.gowatchit.com/api/v2/movies/:id/availabilities"
//replace id of above

//var testThis = "https://api.themoviedb.org/3/movie/105?api_key=9057cf76a0f4698dd3c5d50c15b617fc&language=en-US";
//! 77 is the temporary movie ID it will be changed based on secondary API (movieID)
var imageUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";
var exampleImg = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/5Xsu2o5IsZRuuxCEVZ9nVve21FP.jpg"
//var quoteUrl = "https://the-dune-api.herokuapp.com/quotes"
var tmdbKey = "api_key=9057cf76a0f4698dd3c5d50c15b617fc";
var tmdbUrl = "https://api.themoviedb.org/3/movie/550?query=";
//TODO: add key and URL for movie quotes
var movieList = $(".historyList");
var movieTitle = $("#title");
//!if we go back to using nytAPI this needs to be user input  
var movieArray = JSON.parse(localStorage.getItem("movie")) || [];
var moviePlot = $('#moviePlot');
var movieRating = $('#movieRating');
var movieID;
//to be filled in by fetch requests
var movieQuote;
var btnForm = $("#btnForm");

//TODO: When random button gets pressed generates random movie id
//TODO: From random id fetch into the API
//TODO: Make a variable for ID into localstorage and pull it out
//TODO: Pull ID number from Dune and put it into TMDB API
//TODO: Display movie info from TMDB API

//https://the-dune-api.herokuapp.com/quotes


//API works but does not pull correct data from the array
// fetch for the quote API



//TODO: Base framework for api search on TMDB
var tmdbKey = "9057cf76a0f4698dd3c5d50c15b617fc";
var imgURL = "https://image.tmdb.org/t/p/w500";


function getData(event) {
    //event.preventDefault();
    var randomIDGenerator = Math.floor(Math.random() * 1000);
    console.log (randomIDGenerator);
    fetch("https://api.themoviedb.org/3/movie/"+randomIDGenerator+"?api_key="+tmdbKey+"&language=en-US")
    .then((response) => {
        return response.json();
    }
    ).then((data) => {
        if (data.title === undefined) {
            getData();
        } else {
        var movieTitleData = data.title;
        var moviePoster = document.getElementById("poster");
        var movieIDData = data.id;
        movieID = movieIDData;
        console.log(movieIDData);
        movieTitle.append(movieTitleData);
        movieTitle = movieTitleData;
        moviePoster.setAttribute("src", imgURL.concat(data.poster_path));
        }
      })
    .then(function getMovieReview() {
        fetch("http://www.omdbapi.com/?t=" + movieTitle + "&plot=full&i=tt3896198&apikey=af5f592e")
        .then((response) => {
            return response.json();
        })
            .then((data2) => {
                moviePlot.append(data2.Plot);
                movieRating.append(data2.Ratings[0].Value);
            })
    })

}
btnForm.on("click", getData());

//! below is movie history coding
var x = 0;
var movies = Array();
function getMovies() {
   if (localStorage.getItem("counter") == null) {
    x = 0;
   } else {
    var xString = JSON.parse(localStorage.counter);
    x = parseInt(xString);
    movies = JSON.parse(localStorage.getItem("movieKey"));
 }
   movies[x] = movieTitle;
   x++;
   localStorage.setItem('movieKey', JSON.stringify(movies));
   localStorage.setItem('counter', JSON.stringify(x));
   displayMovie();
}
 
function displayMovie() {
   var names = JSON.parse(localStorage.movieKey);
   var e = "<hr/>";  
   for (var y=0; y<names.length; y++) {
    e += "Movie " + (y+1) + " is " + names[y] + "<br/>";
   }
   document.getElementById("savedMovieContainer").innerHTML = e;
}
