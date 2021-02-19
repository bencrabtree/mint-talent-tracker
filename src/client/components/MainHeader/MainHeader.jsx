import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './main-header.scss';
import MTTLogo from '../common/MTTLogo/MTTLogo';
import NewLeadModal from '../../components/NewLeadModal/NewLeadModal';
import SearchBar from '../SearchBar/SearchBar';
import MTTIcon from '../common/MTTIcon/MTTIcon';
import { Menu, MenuItem } from '@material-ui/core';
import { getSession, logOut } from '../../util/jwt';
import { useAppState } from '../../store';
import MTTButton from '../common/MTTButton/MTTButton';

const MainHeader = ({ }) => {
    const history = useHistory();
    const { addNewClient, userProfile } = useAppState();
    const [ userMenuRef, setUserMenuRef ] = useState();
    const [ searchAddArtist, setSearchAddArtist ] = useState();
    const [ newLeadModalIsOpen, setNewLeadModalIsOpen ] = useState(false);

    const navigateBackHome = () => {
        history.push("/")
    }

    const handleUserLogout = async () => {
        logOut();
        history.push('/');
        history.go(0)
    }

    const handleUserLogin = () => {
        history.push('/auth/signin');
        history.go(0)
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

    const renderMenu = () => {
        if (getSession()) {
            return (
                <Menu
                    id="main-menu"
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
            )
        } else {
            return (
                <Menu
                    id="main-menu"
                    anchorEl={userMenuRef}
                    keepMounted
                    open={Boolean(userMenuRef)}
                    onClose={handleUserMenuClose}
                >
                    <MenuItem onClick={handleUserLogin}>Login with Google</MenuItem>
                </Menu>
            )
        }
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
                    <h1>{ userProfile.first_name || 'Guest' }</h1>
                </div>
                { renderMenu() }
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