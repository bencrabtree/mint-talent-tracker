import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './search-bar.scss';
import { Typeahead } from 'react-bootstrap-typeahead';
import MTTIcon from '../MTTIcon/MTTIcon';
import { useAppState } from '../../store';

const SearchBar = ({ placeholder, onSubmit }) => {
    const { fullRoster } = useAppState();
    const [ value, setValue ] = useState('');

    /**
     * Triggers when user types in field
     */
    const handleInputChange = (val) => {
        console.log('typing...', val)
        setValue(val);
    }

    /**
     * Triggers on tag-complete or selection from dropdown
     */
    const handleChange = (val) => {
        if (val && fullRoster.find(x => x === val)) {
            console.log("SUBMIT", val)
            onSubmit(val);            
        }
    }

    return (
        <div className='search-bar'>
            <MTTIcon type='search-icon' />
            <Typeahead
                id="main-search-bar"
                // labelKey={ option => `${option.first_name} ${option.last_name}`}
                onInputChange={ handleInputChange }
                onChange={ handleChange }
                options={ fullRoster }
                placeholder={ placeholder }
                selected={[ value ]}
            />
        </div>
    )
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
}

SearchBar.defaultProps = {
    placeholder: "Search for an artist"
}

export default SearchBar;