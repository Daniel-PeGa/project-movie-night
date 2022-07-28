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
                displayMovie();

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