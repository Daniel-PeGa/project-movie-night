var movieTitle = $("#title");
var btnForm = $(".btn");
var tmdbKey = "9057cf76a0f4698dd3c5d50c15b617fc";
var imgURL = "https://image.tmdb.org/t/p/w500";
var x = 0;
var movies = Array();

function getData() {
    var randomIDGenerator = Math.floor(Math.random() * 999);
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
        movieTitle.append(movieTitleData);
        movieTitle = movieTitleData;
        moviePoster.setAttribute("src", imgURL.concat(data.poster_path));
        console.log(movieTitle);
        }
    }).catch((error) => {
        console.error('Error:', error);
      })
    .then(function getMovieReview() {
        console.log(movieTitle);
        fetch("http://www.omdbapi.com/?t=" + movieTitle + "&i=tt3896198&apikey=af5f592e")
        .then((response) => {
            return response.json();
        })
            .then((data2) => {
                console.log(data2);
                var movieRatingData = document.getElementById("movieRating");
                movieRatingData.innerHTML = "IMDB Rating: " + data2.imdbRating;
                moviePlotData = document.getElementById("moviePlot");
                moviePlotData.innerHTML = data2.Plot;
                
                console.log(movieRatingData);
                console.log(moviePlotData);
                displayMovie();
            })
    })
}

btnForm.on("click", getData());
 
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