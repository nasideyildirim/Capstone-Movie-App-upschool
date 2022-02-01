import React, { Component, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import FavouriteMovies from '../FavouriteMovies/FavouriteMovies';
import WatchedMovies from '../WatchedMovies/WatchedMovies';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Movie from '../Movie/Movie';
import NotFound from '../NotFound/NotFound';
import ScrollTop from '../elements/ScrollTop/ScrollTop';
import alertify from 'alertifyjs';
import { addLocalStorage, removeMovieFromStorage  } from '../../Functions/StorageFunctions/storageFunctions';
import UserProvider from '../../context';

class App extends Component {

    state = {
        favouriteMovies: [],
        watchedMovies: [],
    }

    componentDidMount() {
        if (localStorage.getItem("favouriteMovies")) { // First Contact this App 
          let movies = JSON.parse(localStorage.getItem('favouriteMovies'));
          this.setState({
            ...this.state,
            favouriteMovies : movies,
          })
        }
      }

    getFavouriteMovies = favouritesMovie => {
        const stateMovies = this.state.favouriteMovies;
        const addedMovie = stateMovies.find(movie => movie.id === favouritesMovie.id);
        if (!addedMovie) {
            this.setState({
                ...this.state,
                favouriteMovies: [...stateMovies, favouritesMovie],
            })
            addLocalStorage(favouritesMovie)
            alertify.success("Movie Added Successfully" , 2)
        }
        else {
            alertify.error("This movie is already on your list", 2)

        }
    }

    clearFavouriteMovie = id => {
        const filterMovie = this.state.favouriteMovies.filter(movie => movie.id !== id);
        this.setState({
            favouriteMovies: filterMovie
        })
        alertify.success(" This Movie Has Been Successfully Deleted", 2)
        removeMovieFromStorage(id)
    }

    clearAllFavouriteMovies = () => {
        this.setState({
            favouriteMovies: []
        })
        if (this.state.favouriteMovies.length) {
            alertify.success(" All Movies Deleted Successfully", 2)
        }

        localStorage.removeItem("favouriteMovies");
    }


    //////////
    

    componentDidMount() {
        if (localStorage.getItem("watchedMovies")) { // First Contact this App 
          let movies = JSON.parse(localStorage.getItem('watchedMovies'));
          this.setState({
            ...this.state,
            watchedMovies : movies,
          })
        }
      }

    getWatchedMovies = watchedMovie => {
        const stateMovies = this.state.watchedMovies;
        const addedMovie = stateMovies.find(movie => movie.id === watchedMovie.id);
        if (!addedMovie) {
            this.setState({
                ...this.state,
                watchedMovies: [...stateMovies, watchedMovie],
            })
            addLocalStorage(watchedMovie)
            alertify.success("Movie Added Successfully", 2)
        }
        else {
            alertify.error("This movie is already on your list", 2)

        }
    }

    clearWatchedMovie = id => {
        const filterMovie = this.state.watchedMovies.filter(movie => movie.id !== id);
        this.setState({
            watchedMovies: filterMovie
        })
        alertify.success(" This Movie Has Been Successfully Deleted", 2)
        removeMovieFromStorage(id)
    }

    clearAllWatchedMovies = () => {
        this.setState({
            watchedMovies: []
        })
        if (this.state.watchedMovies.length) {
            alertify.success(" All Movies Deleted Successfully", 2)
        }

        localStorage.removeItem("watchedMovies");
    }


    render() {

        const { favouriteMovies , watchedMovies  } = this.state;
        
        return (
            <Router> 
                <UserProvider>
                <ScrollTop>
                    <React.Fragment>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/favourites"
                                render = {
                                    props => (
                                        <FavouriteMovies
                                            {...props}
                                            favouriteMovies={favouriteMovies}
                                            clearAllFavouriteMovies={this.clearAllFavouriteMovies}
                                            clearFavouriteMovie={this.clearFavouriteMovie}
                                        /> 
                                    )
                                }
                            />
                            <Route exact path="/movie/:movieId"
                                render={
                                    props => (
                                        <Movie
                                            {...props}
                                            getFavouriteMovies={this.getFavouriteMovies}
                                        />
                                    )
                                }
                            />
                            
                            <Route exact path="/watched"
                                render = {
                                    props => (
                                        <WatchedMovies
                                            {...props}
                                            watchedMovies={watchedMovies}
                                            clearAllWatchedMovies={this.clearAllWatchedMovies}
                                            clearWatchedMovie={this.clearWatchedMovie}
                                        /> 
                                    )
                                }
                            />
                            <Route exact path="/movie/:movieId"
                                render={
                                    props => (
                                        <Movie
                                            {...props}
                                            getWatchedMovies={this.getWatchedMovies}
                                        />
                                    )
                                }
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </React.Fragment>
                    <Footer/>
                </ScrollTop>
                </UserProvider>
            </Router>
        )
    }

}
export default App;
