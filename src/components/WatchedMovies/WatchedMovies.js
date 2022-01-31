import React, { Component } from 'react';
import ImageFrame from '../elements/ImageFrame/ImageFrame';
import { BASE_IMG } from '../../config';
import no_img from '../elements/img/no_image.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import HaveNotWatchedMovies from '../elements/HaveNotWatchedMovies/HaveNotWatchedMovies';
import PageTitle from '../elements/PageTitle/PageTitle';

class WatchedMovies extends Component {

  render() {
    const { watchedMovies, clearAllWatchedMovies, clearWatchedMovie  } = this.props;

    return (
      <Container>
        {
          watchedMovies.length ?
            <React.Fragment>
              <PageTitle title = "My Watched Movies" />
              <Row>
                {
                  watchedMovies.map((movie) => {
                    return (
                      <ImageFrame
                        key={movie.id}
                        movieId={movie.id}
                        image={movie.poster_path ? `${BASE_IMG}${movie.poster_path}` : `${no_img}`}
                        clickable={true}
                        clearFavouriteMovie={clearWatchedMovie}
                      />
                    )
                  })
                }
              </Row>
              {watchedMovies.length > 1 &&
                <Row className = "my-5">
                  <Col className="text-center">
                    <button className="btn btn-danger"
                      onClick={clearAllWatchedMovies}
                    >
                      Clear All
                    </button>
                  </Col>
                </Row>
              }

            </React.Fragment>
            :
            <HaveNotWatchedMovies />

        }

      </Container>
    )
  }
}

export default WatchedMovies;