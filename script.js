var movieTitle = $("#title");
var moviePlot = $('#moviePlot');
var movieRating = $('#movieRating');
var movieID;
var movieQuote;
var btnForm = $("#btnForm");
var tmdbKey = "9057cf76a0f4698dd3c5d50c15b617fc";
var imgURL = "https://image.tmdb.org/t/p/w500";
var x = 0;
var movies = Array();
var randomIDGenerator;

//! code for future use, Used to get random movie based off genre, add getGenre() to click event to activate
//!has issues with form submitting upon page load, preventDefault() is undefined for some reason so solution unclear
var genreIDGenerator;
var genreInputVal = $('#genre-input').value;

function getGenre(event) {
    var genreID = genreInputVal;
    fetch("https://api.themoviedb.org/3/discover/movie?api_key="+tmdbKey+"&with_genres="+genreID)
    .then((data3) => {
        console.log(data3);
        //by default, the above api pulls 20 movies based on genre to use with the below RNG 0-19
        genreIDGenerator = Math.floor(Math.random() * 19);
        console.log(genreIDGenerator);
        console.log(genreInputVal);
       //randomIDGenerator = data3.id;
    })
}
//getGenre();
//! end of future development code

function getData(event) {
    //event.preventDefault();

    randomIDGenerator = Math.floor(Math.random() * 1000);
    console.log (randomIDGenerator);
    fetch("https://api.themoviedb.org/3/movie/"+randomIDGenerator+"?api_key="+tmdbKey+"&language=en-US")
    .then((response) => {
        return response.json();
    }
    ).then((data) => {
        if (data.title === undefined) {
            getData(event);
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
        fetch("https://www.omdbapi.com/?t=" + movieTitle + "&plot=full&i=tt3896198&apikey=af5f592e")
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
 
function displayMovie()
{
    var names = JSON.parse(localStorage.movieKey);
    var e = "<hr/>";  
    
    for (var y=0; y<names.length; y++) {
        e += "Saved movie to watch later is " + names[y] + "<br/>";
    }
   document.getElementById("savedMovieContainer").innerHTML = e;
}