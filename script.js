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
var btnForm = $(".btn");
var movieTitle = $("#title");
//!if we go back to using nytAPI this needs to be user input  
var userInput = btnForm.textContent;
var movieArray = JSON.parse(localStorage.getItem("Saved Movie")) || [];
var moviePlot = $('#moviePlot');
var movieRating = $('#movieRating');

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
        var movieTitleData = data.title;
        var moviePoster = document.getElementById("poster");
        movieTitle.append(movieTitleData);
        movieTitle = movieTitleData;
        moviePoster.setAttribute("src", imgURL.concat(data.poster_path));
        console.log(movieTitle);
        if (data.title === undefined) {
            document.getElementById("modal").classList.remove("hidden");
            document.getElementById("poster").classList.add("hidden");
        }
    })
    .then(function getMovieReview() {
        console.log(movieTitle);
        fetch("http://www.omdbapi.com/?t=" + movieTitle + "&i=tt3896198&apikey=af5f592e")
        .then((response) => {
            return response.json();
        })
            .then((data2) => {
                console.log(data2);
                var movieRatingData = data2.Ratings[1].Value;
                var moviePlotData = data2.Plot;
                moviePlot.textContent = data2.Plot
                
                console.log(movieRatingData);
                console.log(moviePlotData);
                movieRating.textContent = movieRatingData;
            })
    })

}
    //.catch(() => {
    //    console.log("Oops! Try again later!");
    //})

//function getMovieReview() {
//    fetch("http://www.omdbapi.com/?t=" + movieTitle + "&i=tt3896198&apikey=af5f592e")
//        .then((response2) => {
//            return response2.json();
//        })
//}

btnForm.on("click", getData());

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

function lastSearch() {
    var selectedMovie = ("Result of the button being clicked in the form of an object")
    var storeData = [];
    localStorage.setItem(selectedMovie,JSON.stringify("photo of selected movie and maybe review or something idk lol"))
    storeData.push("What we want to put in the previous movie from the API");
    localStorage.setItem("storeData", JSON.stringify(storeData))
}

function showLastSearch() {
    var selectedMovieGetItem = JSON.parse(localStorage.getItem(storeData))
}

