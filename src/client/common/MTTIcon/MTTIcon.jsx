import React from 'react';
import PropTypes from 'prop-types';
import './mtt-icon.scss';

const MTTIcon = ({ name }) => {

    return (
        <div className="mtt-icon">
            <div className={ name } />
        </div>
    )
}

MTTIcon.propTypes = {
    name: PropTypes.oneOf([
        'mtg-logo-black',
        'mtg-logo-green',
        'under-construction'
    ]).isRequired
}

export default MTTIcon;