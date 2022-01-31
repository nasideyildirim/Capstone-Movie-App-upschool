import React, { Component } from 'react';
import ImageFrame from '../elements/ImageFrame/ImageFrame';
import { BASE_IMG } from '../../config';
import no_img from '../elements/img/no_image.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import HaveNotFavouriteMovies from '../elements/HaveNotFavouriteMovies/HaveNotFavouriteMovies';
import PageTitle from '../elements/PageTitle/PageTitle';

class FavouriteMovies extends Component {

  render() {
    const { favouriteMovies, clearAllFavouriteMovies, clearFavouriteMovie  } = this.props;

    return (
      <Container>
        {
          favouriteMovies.length ?
            <React.Fragment>
              <PageTitle title = "My Favorite Movies" />
              <Row>
                {
                  favouriteMovies.map((movie) => {
                    return (
                      <ImageFrame
                        key={movie.id}
                        movieId={movie.id}
                        image={movie.poster_path ? `${BASE_IMG}${movie.poster_path}` : `${no_img}`}
                        clickable={true}
                        clearFavouriteMovie={clearFavouriteMovie}
                      />
                    )
                  })
                }
              </Row>
              {favouriteMovies.length > 1 &&
                <Row className = "my-5">
                  <Col className="text-center">
                    <button className="btn btn-danger"
                      onClick={clearAllFavouriteMovies}
                    >
                      Clear All
                    </button>
                  </Col>
                </Row>
              }

            </React.Fragment>
            :
            <HaveNotFavouriteMovies />

        }

      </Container>
    )
  }
}

export default FavouriteMovies;
