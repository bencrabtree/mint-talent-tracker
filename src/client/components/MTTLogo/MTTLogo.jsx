import React from 'react';
import PropTypes from 'prop-types';
import './mtt-logo.scss';

const MTTLogo = ({ onClick }) => {

    return (
        <div className='mtt-logo' onClick={ onClick }>
            <div className='mtt-logo-svg' />
        </div>
    )
}

MTTLogo.propTypes = {
    onClick: PropTypes.func
}

export default MTTLogo;