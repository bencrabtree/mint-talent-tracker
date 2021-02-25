import React from 'react';
import PropTypes from 'prop-types';
import './mtt-button.scss';
import { Button } from '@material-ui/core';

const MTTButton = ({
    label,
    onClick,
    startIcon,
    endIcon,
    title,
    type,
    disabled
}) => {
    return (
        <div className={`mtt-button ${type} ${disabled ? 'disabled' : 'active'}`} onClick={onClick} title={title}>
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
    type: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary'
    ]),
    disabled: PropTypes.bool
}

MTTButton.defaultProps = {
    type: 'primary',
    disabled: false
}

export default MTTButton;