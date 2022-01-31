import React from 'react';
import { Button, Row, Col, Badge, Container } from 'react-bootstrap';
import Proptypes from 'prop-types';

const LoadMoreBtn = ({ loadMoreMovies, currentPage, text }) => {
    return (
        <div>
            <Container className = "mb-5">
                <Row className="my-5">
                    <Col className="text-center">
                        <Button variant="primary" block
                            size="lg"
                            className="p-3"
                            onClick={loadMoreMovies} // Function from Home Component
                            >
                            {text} <Badge variant="light">{currentPage}</Badge>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

LoadMoreBtn.propTypes = {
    loadMoreMovies : Proptypes.func,
    text : Proptypes.string,
    currentPage : Proptypes.number
}

export default LoadMoreBtn;
