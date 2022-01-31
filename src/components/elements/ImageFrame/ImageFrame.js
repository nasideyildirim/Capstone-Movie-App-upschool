import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ImageFrame.css';
 

const ImageFrame = ({ movieId, movieName, searchWord, image, personMovieId, clickable, clearFavouriteMovie }) => {

    return (
        <Col md= {4} xs= {6} lg ={3} className = "mt-5 animated fadeInLeftBig ">
            { clickable ? /* if clickable props is true --> go movie, else go movie again but with personal movie id ! */
                <React.Fragment>
                    <Link to={{ pathname: `/movie/${movieId}`, movieName: `${movieName}` }}>
                        <Card className="card-box image-frame  ">
                            <Card.Img variant="top" src={image} alt="movieImg" />
                        </Card>
                    </Link>
                    {
                        clearFavouriteMovie && <button
                            className="mt-3 btn btn-warning btn-block shadow-lg"
                            onClick={ () => clearFavouriteMovie(movieId) }
                        > Delete This Movie </button>

                    }
                </React.Fragment>
                : 
                <Link to = {{pathname: `/movie/${personMovieId}`}}>  {/* Person Known For Movies*/}
                <Card className = "bg-dark text-light card-box  image-frame " style = {{maxHeight: "500px"}}>
                    <Card.Img variant="top" src={image} alt="movieImg" />
                </Card>
                </Link>
            }            
        </Col>
    )
}

ImageFrame.propTypes = {
    image : PropTypes.string,
    movieId : PropTypes.number, 
    movieName : PropTypes.string,
    searchWord : PropTypes.string,
    id : PropTypes.number,
    clickable: PropTypes.bool
}

export default ImageFrame;
