import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './main-header.scss';
import MTTLogo from '../common/MTTLogo/MTTLogo';
import NewLeadModal from '../../components/NewLeadModal/NewLeadModal';
import SearchBar from '../SearchBar/SearchBar';
import MTTIcon from '../common/MTTIcon/MTTIcon';
import { Menu, MenuItem } from '@material-ui/core';
import { http } from '../../util/api';
import { useAppState } from '../../store';
import MTTButton from '../common/MTTButton/MTTButton';

const MainHeader = ({ }) => {
    const history = useHistory();
    const { addNewClient, userProfile } = useAppState();
    const [ userMenuRef, setUserMenuRef ] = useState();
    const [ searchAddArtist, setSearchAddArtist ] = useState();
    const [ newLeadModalIsOpen, setNewLeadModalIsOpen ] = useState(false);

    const navigateBackHome = () => {
        if (history.location.pathname != '/home') {
            history.push("/home")
        }
    }

    const handleUserLogout = async () => {
        await http.get('/auth/signout');
        history.push('/auth/isLoggedOut')
    }

    const onAddNewLead = (leadEntry) => {
        setSearchAddArtist(leadEntry);
        setNewLeadModalIsOpen(true);
    }

    const handleNewLeadModalClose = () => {
        setSearchAddArtist(null);
        setNewLeadModalIsOpen(false);
    }

    const handleNewLeadModalSubmit = async (value) => {
        let newClient = value.reduce((acc, elt) => {
            acc[elt.id] = elt.data;
            return acc;
        }, {});
        await addNewClient(newClient);
    }

    const handleSearchBarSubmit = (query) => {
        console.log('fOUND This', query)
    }

    const handleUserMenuToggle = (e) => {
        setUserMenuRef(e.target)
    }

    const handleUserMenuClose = () => {
        setUserMenuRef(null);
    }

    return (
        <div className='main-header'>
            <MTTLogo onClick={ navigateBackHome } />
            <SearchBar onSubmit={ handleSearchBarSubmit } onAddNewLead={ onAddNewLead } />
            <div className='action-bar'>
                <MTTButton
                    label="New Lead"
                    onClick={ () => setNewLeadModalIsOpen(true) }
                    color="primary"
                />
                <span className='divider-bar' />
                <div className='user-profile-dropdown' onClick={ handleUserMenuToggle }>
                    <MTTIcon type="default-avatar" style="round" />
                    <h1>{ userProfile.first_name }</h1>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={userMenuRef}
                    keepMounted
                    open={Boolean(userMenuRef)}
                    onClose={handleUserMenuClose}
                >
                    <MenuItem onClick={handleUserMenuClose}>Preferences</MenuItem>
                    <MenuItem onClick={handleUserMenuClose}>My roster</MenuItem>
                    <MenuItem onClick={handleUserMenuClose}>Calendar</MenuItem>
                    <MenuItem onClick={handleUserLogout}>Logout</MenuItem>
                </Menu>
            </div>
            <NewLeadModal
                artistName={searchAddArtist}
                isOpen={ newLeadModalIsOpen }
                onClose={ handleNewLeadModalClose }
                onSubmit={ handleNewLeadModalSubmit }
            />
        </div>
    )
}

export default MainHeader;