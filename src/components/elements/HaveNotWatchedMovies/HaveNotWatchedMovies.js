import React from "react";
import "./HaveNotWatchedMovies.css";
import bookmark from '../img/bookmark.png';

const HaveNotWatchedMovies = () => {
  return (
    <div className="text-container text-center">
        <img className = "no-movie-img" src={`${bookmark}`} alt="bookmark-img"/>
        <h1>Click X Icon to Add Movies to Watched. </h1>
    </div>
  );
};

export default HaveNotWatchedMovies;
