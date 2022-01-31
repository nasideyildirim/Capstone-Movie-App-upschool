import React from 'react';
import './Spinner.css';
import './Loading.css';
import load from '../img/loading.gif'

const Spinner = () => {
    return (
        <div className="loading">
            <img src={load} alt="Loading content of movies gif" />
        </div>
    )
}

export default Spinner;