import React from 'react';
import Proptypes from 'prop-types';

const PageTitle = ({title}) => {
    return (
        <React.Fragment>
            <h1 className = "text-center  my-4 text-primary"> {title} </h1>
        </React.Fragment>
    )
}

PageTitle.propTypes = {
    title : Proptypes.string.isRequired
}

export default PageTitle;

