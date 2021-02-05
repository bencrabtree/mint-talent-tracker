import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './main-header.scss';
import MTTLogo from '../MTTLogo/MTTLogo';
import SearchBar from '../SearchBar/SearchBar';
import MTTIcon from '../MTTIcon/MTTIcon';

const MainHeader = ({ }) => {
    const history = useHistory();

    const navigateBackHome = () => {
        console.log(history)
        if (true) {
            history.push("/home")
        }
    }

    const handleSearchBarSubmit = (query) => {

    }

    return (
        <div className='main-header'>
            <MTTLogo onClick={ navigateBackHome } />
            <SearchBar onSubmit={ handleSearchBarSubmit } />
            <div className='action-bar'>
                <MTTIcon type="add-icon" style="round" />
                <MTTIcon type="settings" style="round" />
                <MTTIcon type="default-avatar" style="round" />
            </div>
        </div>
    )
}

export default MainHeader;