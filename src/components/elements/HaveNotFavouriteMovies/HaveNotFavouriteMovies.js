import React from "react";
import "./HaveNotFavouriteMovies.css";
import hearth from '../img/favourite-img.png';

const HaveNotFavouriteMovies = () => {
  return (
    <div className="text-container text-center">
        <img className = "no-movie-img" src={`${hearth}`} alt="hearth-img"/>
        <h1>Click ♥ Icon to Add Movies to Favorites. </h1>
    </div>
  );
};

export default HaveNotFavouriteMovies;
