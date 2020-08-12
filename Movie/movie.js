var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        if (rating === void 0) { rating = 'PG'; }
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.getPG = function (movieObj) {
        return movieObj.filter(function (callback) { return callback.rating === 'PG'; });
    };
    return Movie;
}());
var movieObj = new Movie("CasinoRoyale", "Eon Productions", "PG13");
var list = [new Movie("Narnia", "Disney", "PG"),
    new Movie("Pirates of the Caribbean", "Disney", "PG5"),
    new Movie("FORZEN II", "Disney", "PG"),
    new Movie("Moana", "Disney", "PG"),
    new Movie("Zootopia", "Disney", "PG5"),
    new Movie("FORZEN I", "Disney", "PG5"),
    new Movie("Tangled", "Disney", "PG")];
var sortedListOfMovie = movieObj.getPG(list);
for (var i = 0; i < sortedListOfMovie.length; i++) {
    //document.getElementById("movieList").innerHTML = sortedListOfMovie[i];
    console.log(sortedListOfMovie[i]);
}
