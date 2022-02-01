import React, { Component } from 'react';
import { BASE_URL, API_KEY } from '../../config';
import Spinner from '../elements/Spinner/Spinner';
import MovieInfo from '../elements/MovieInfo/MovieInfo';


class Movie extends Component {

    state = {
        movie: [],
        loadingMovies: false,
        loadingActors: false,
        actors: [],
        similar_movies_array: [],
        directors: [],
        visible: 6, // This state is for how many actors rendered.
        
    }

    componentDidMount() {
        const { match } = this.props;

        this.setState({
            ...this.state,
            loadingMovies: true,
            loadingActors: true,
            
        })

        let moviesEndPoint = `${BASE_URL}/movie/${match.params.movieId}?api_key=${API_KEY}&language=en-US`
        let creditsEndPoint = `${BASE_URL}/movie/${match.params.movieId}/credits?api_key=${API_KEY}`;
        this.getMovieWithId(moviesEndPoint);
        this.getDirectorsAndActors(creditsEndPoint);


    }

    getMovieWithId = moviesEndPoint => {
        const { match } = this.props;

        fetch(moviesEndPoint)
            .then(response => response.json())
            .then((movie) => {
                // console.log(movie);

                if (movie.overview !== "") {
                    this.setState({
                        movie,
                        loadingMovies: false
                    })
                }
                else { // if have not turkish overview fetch this 
                    let engEndPoint = `${BASE_URL}/movie/${match.params.movieId}?api_key=${API_KEY}`
                    fetch(engEndPoint)
                        .then(response => response.json())
                        .then((movie) => {
                            this.setState({
                                movie,
                                loadingMovies: false
                            })
                        })
                }
            })
    }

    getDirectorsAndActors = creditsEndPoint => {
        fetch(creditsEndPoint)
            .then(response => response.json())
            .then((credits) => {
                    // console.log(credits)
                    const filterDirector = credits.crew.filter(person => person.job === "Director"); // filter directors from all employees
                    // console.log(credits.crew)
                    if (filterDirector.length) {
                        this.setState({
                            actors: credits.cast,
                            directors: filterDirector[0].name,
                            loadingActors: false })}
                    else {
                        this.setState({
                            actors: credits.cast,
                            directors: "No Information",
                            loadingActors: false
                        })}
            })
    }

    loadMore = () => {
        this.setState({
            visible: this.state.visible + 6,
        })
    }

    render() {
        const { movie, loadingActors, loadingMovies, actors, directors, visible } = this.state
        const { location, getFavouriteMovies, getWatchedMovies } = this.props
        return (
            <React.Fragment>
                { loadingActors || loadingMovies  ? <Spinner /> :
                    (movie && actors.length ) ?
                        <MovieInfo
                            movieInfo={movie}
                            actors={actors}
                            directors={directors}
                            searchWord={location.searchWord}
                            visible={visible}
                            loadMore={this.loadMore}
                            loading={(loadingActors || loadingMovies)}
                            getFavouriteMovies={getFavouriteMovies}
                            getWatchedMovies={getWatchedMovies}
                            
                        /> : null
                }

                {
                    !actors.length && !loadingActors ? <h1>No Movie Found! </h1> : null
                }
            </React.Fragment>
        )
    }
}

export default Movie;

