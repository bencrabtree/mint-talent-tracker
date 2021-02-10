import React from 'react';
import PropTypes from 'prop-types';
import './mtt-loading.scss';
import { CircularProgress } from '@material-ui/core';

const MTTLoading = ({
    size
}) => {

    return (
        <div className='mtt-loading'>
            <CircularProgress size={size} />
        </div>
    )
}

MTTLoading.propTypes = {
    size: PropTypes.string
}

MTTLoading.defaultProps = {
    size: '5rem'
}

export default MTTLoading;