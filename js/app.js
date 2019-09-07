// Whatever you want here...
$(function(){
    var movieList = $('#movie-list');
    var movieUrl = 'https://pelec4.herokuapp.com/movies/';
    // Get Id 
    var movieId;
    const getMovie = async () => {
        try{ 
            const getAllMovie = await MOVIE_SERVICE.getAllMovie();
            
            await getAllMovie.forEach(function(res) {
               //console.log(res);
               makeMovieList(res.title, res.poster, res.plot, res.genres, res._id);
            });

            
        }
        catch(error){
            //console.log(error);
        }
    }

    

    function makeMovieList(title, poster, plot, genres, id){
        if(poster) {
             var movieDescription = `<li class="movie-content">
                                        <a href="${movieUrl + id}"">
                                            <img src="${poster}"></img>
                                        </a>
                                    <h4>${title}</h4>
                                    <h4>${plot}</h4>
                                    <h4>${genres}</h4>
                                    </li>
                                `;
             //console.log(poster);
        }
        movieList.append(movieDescription);
    }
    getMovie();

})