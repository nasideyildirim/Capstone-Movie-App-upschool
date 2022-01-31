import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';


const BreadCrumbs = ({ searchWord, clickable, title }) => {

    return (
        <Breadcrumb>
            <Link to="/">
                Home / 
            </Link>
            {
                searchWord ?
                    <Breadcrumb.Item active={clickable ? true : false}>
                        {searchWord}
                        {/* This props comes = Home ----> ImageFrame ----> Movie (with Link url way) ----> MovieInfo ----> Here  */}
                    </Breadcrumb.Item> : null
            }
            <Breadcrumb.Item active>
                {title}
            </Breadcrumb.Item>
        </Breadcrumb>
    )
}

BreadCrumbs.propTypes = {
    title : Proptypes.string,
    searchWord : Proptypes.string,
    clickable : Proptypes.bool
}

BreadCrumbs.defaultProps = {
    title: 'Failed to Submit Actor Name'
};

export default BreadCrumbs;
