import React, { Component } from 'react';
import { Form, Container } from 'react-bootstrap';
import './SearchBar.css';
import Proptypes from 'prop-types';

class SearchBar extends Component {

    state = {
        value: ""
    }

    timeout = null; 

    getValue = event => {
        let value = event.target.value;
        this.setState({
            value
        });

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            this.props.callback(this.state.value);
        }, 500);
    }

    render() {

        const { placeHolder } = this.props

        return (
            <div className="mt-4">
                <Container>
                    <Form.Group>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder={placeHolder}
                            onChange={this.getValue}
                        />
                    </Form.Group>
                </Container>
                
            </div>
        )
    }
}

SearchBar.propTypes = {
    placeholder : Proptypes.string,
    callback : Proptypes.func
}

export default SearchBar;