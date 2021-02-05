import React from 'react';
import PropTypes from 'prop-types';
import './mtt-icon.scss';

const MTTIcon = ({ type, style, onClick }) => {

    return (
        <div className={`mtt-icon ${style}`} onClick={ onClick }>
            <div className={ type } />
        </div>
    )
}

MTTIcon.propTypes = {
    type: PropTypes.oneOf([
        'mtg-logo-black',
        'mtg-logo-green',
        'search-icon',
        'add-icon',
        'default-avatar',
        'settings',
        'under-construction'
    ]).isRequired,
    style: PropTypes.oneOf([
        "round",
        "rigid"
    ])
}

MTTIcon.defaultProps = {
    style: "rigid"
}

export default MTTIcon;