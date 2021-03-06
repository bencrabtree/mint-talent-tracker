import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './mtt-input.scss';

const MTTInput = ({
    id,
    label,
    value,
    type,
    onChange,
    placeholder,
    isValid,
    isDisabled,
    rows
}) => {
    const [ input, setInput ] = useState("");

    useEffect(() => {
        handleValueChange(id, value);
    }, [ value ])

    const handleInputChange = ({ target: { id, value }}) => {
        handleValueChange(id, value);
    }

    const handleValueChange = (id, value) => {
        setInput(value);
        onChange(id, value);
    }

    const renderInput = () => {
        if (type === 'textarea') {
            return (
                <textarea style={{ resize: "none" }}
                    id={id}
                    value={input}
                    rows={rows}
                    onChange={ handleInputChange }
                    placeholder={ !input || input === "" ? placeholder : "" }
                    onFocus={e => e.target.placeholder = "" }
                    onBlur={e => input === "" ? (e.target.placeholder = placeholder) : null }
                    disabled={ isDisabled }
                />
            )
        } else {
            return (
                <input
                    id={id}
                    type='text'
                    value={input}
                    onChange={ handleInputChange }
                    placeholder={ !input || input === "" ? placeholder : "" }
                    onFocus={e => e.target.placeholder = "" }
                    onBlur={e => input === "" ? (e.target.placeholder = placeholder) : null }
                    disabled={ isDisabled }
                />
            )
        }
    }

    return (
        <div className={`mtt-input ${isValid ? 'valid' : 'invalid'}`}>
            { label && <label>
                { label }
            </label> }
            { renderInput() }
        </div>
    )
}

MTTInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.oneOf(['text', 'textarea']),
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    isValid: PropTypes.bool,
    isDisabled: PropTypes.bool,
    rows: PropTypes.string
}

MTTInput.defaultProps = {
    type: 'text',
    placeholder: "--",
    isValid: true,
    isDisabled: false,
    rows: '8'
}

export default MTTInput;