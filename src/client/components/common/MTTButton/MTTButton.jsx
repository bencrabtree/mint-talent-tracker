import React from 'react';
import PropTypes from 'prop-types';
import './mtt-button.scss';
import { Button } from '@material-ui/core';

const MTTButton = ({
    label,
    onClick,
    startIcon,
    endIcon,
    color,
    disabled
}) => {
    return (
        <div className={`mtt-button ${color} ${disabled ? 'disabled' : 'active'}`} onClick={onClick}>
            <Button
                startIcon={ startIcon }
                endIcon={ endIcon }
                disabled={disabled}
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
    ]),
    disabled: PropTypes.bool
}

MTTButton.defaultProps = {
    color: 'primary',
    disabled: false
}

export default MTTButton;