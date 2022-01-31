import React, { Component } from 'react';
import { BASE_URL, API_KEY, BASE_IMG } from '../../config';
import Spinner from '../elements/Spinner/Spinner';
import ImageFrame from '../elements/ImageFrame/ImageFrame';
import no_img from '../elements/img/no_image.jpg';
import { Row, Container, Col } from 'react-bootstrap';
import BreadCrumb from '../elements/BreadCrumb/BreadCrumbs';
import PersonInfoBar from '../elements/PersonInfoBar/PersonInfoBar';
import './PersonInfo.css';
import LoadMoreBtn from '../elements/LoadMore/LoadMoreBtn';
import PageTitle from '../elements/PageTitle/PageTitle';

class PersonInfo extends Component { //  depending on the person id, I do request operations in this Class !

  state = {
    personMovies: [],
    personDetails: {},
    loadingPersonMovies: false,
    loadingPersonDetails: false,
    visible: 8,
    loadingMoreMovies : false
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      loadingPersonMovies: true,
      loadingPersonDetails: true
    });

    let endPoint = `${BASE_URL}/person/${this.props.match.params.personId}/movie_credits?api_key=${API_KEY}`
    this.getMovieAndPersonDetails(endPoint)
  }

  getMovieAndPersonDetails = endPoint => {
    fetch(endPoint)
      .then(response => response.json())
      .then((personMovies) => {
        if (personMovies.cast) {
          this.setState({
            personMovies: personMovies.cast,
            loadingPersonMovies: false
          }, () => { //CallBack Function with get personal details
            let endPoint = `${BASE_URL}/person/${this.props.match.params.personId}?api_key=${API_KEY}`
            fetch(endPoint)
              .then(response => response.json())
              .then((personDetails => {
                this.setState({
                  personDetails,
                  loadingPersonDetails: false
                })
              }))
          })
        }
        else {
          this.setState({
            loadingPersonDetails : false
          })
          console.log("Bad Request")
        }

      })
  }

    loadMoreMovies = () => {
        this.setState({
            visible : this.state.visible + 4,
        })
    }

render() {
  const { personMovies, personDetails, loadingPersonMovies, loadingPersonDetails, visible } = this.state;
  return (
    <>
      <BreadCrumb
        title={this.props.location.actorName}
      />
      {
        loadingPersonMovies || loadingPersonDetails ? <Spinner /> :
          (
            personMovies.length && personDetails ?
              <>
                  <Container fluid="xs">
                    <Row className="no-gutters person-info-container ">
                      <Col sm={10} className="offset-sm-1" >
                        <PersonInfoBar
                          info={personDetails}
                        />
                      </Col>
                    </Row>
                  </Container>  
                <Container className="animated fadeIn">
                  <PageTitle title = "Movies Starred In" />
                  <Row>
                    {
                      personMovies.slice(0, visible).map((movie) => {
                        return <ImageFrame
                          key={movie.id}
                          image={movie.poster_path ? `${BASE_IMG}${movie.poster_path}` : `${no_img}`}
                          personMovieId={movie.id}
                          clickable={false}
                        />
                      })
                    }
                  </Row>

                { 
                    visible < personMovies.length ?
                      <LoadMoreBtn
                        loadMoreMovies={this.loadMoreMovies}
                        text={personMovies.length - visible + " Show More Movie"}
                      /> : null                 
                }
                </Container>
              </>
              :
              null
          )
      }
    </>
  )
}
}


export default PersonInfo;
