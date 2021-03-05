import React from 'react';
import PropTypes from 'prop-types';
import './mtt-icon.scss';

const MTTIcon = ({ type, style, onClick, title }) => {

    return (
        <div className={`mtt-icon ${style}`} onClick={ onClick } title={title}>
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
        'google-small',
        'default-avatar',
        'settings',
        'under-construction',
        'info'
    ]).isRequired,
    style: PropTypes.oneOf([
        "round",
        "rigid"
    ]),
    title: PropTypes.string,
    onClick: PropTypes.func
}

MTTIcon.defaultProps = {
    style: "rigid"
}

export default MTTIcon;