import React from 'react';
import PropTypes from 'prop-types';
import './mtt-button.scss';
import { Button } from '@material-ui/core';

const MTTButton = ({
    label,
    onClick,
    startIcon,
    endIcon,
    color
}) => {
    return (
        <div className={`mtt-button ${color}`} onClick={onClick}>
            <Button
                startIcon={ startIcon }
                endIcon={ endIcon }
            >
                { label }
            </Button>
        </div>
    )
}

MTTButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    color: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary'
    ])
}

MTTButton.defaultProps = {
    color: 'primary'
}

export default MTTButton;