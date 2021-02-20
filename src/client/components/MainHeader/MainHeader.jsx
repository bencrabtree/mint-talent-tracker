import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './main-header.scss';
import MTTLogo from '../common/MTTLogo/MTTLogo';
import NewLeadModal from '../../components/NewLeadModal/NewLeadModal';
import SearchBar from '../SearchBar/SearchBar';
import MTTIcon from '../common/MTTIcon/MTTIcon';
import { Menu, MenuItem } from '@material-ui/core';
import { isLoggedIn, logOut } from '../../util/auth';
import { useAppState } from '../../store';
import MTTButton from '../common/MTTButton/MTTButton';
import Avatar from '../common/Avatar/Avatar';

const MainHeader = ({ }) => {
    const history = useHistory();
    const { addNewClient, userProfile, setLoading } = useAppState();
    const [ userMenuRef, setUserMenuRef ] = useState();
    const [ searchAddArtist, setSearchAddArtist ] = useState();
    const [ newLeadModalIsOpen, setNewLeadModalIsOpen ] = useState(false);

    const navigateBackHome = () => {
        if (history.location.pathname != "/") {
            history.push("/");
            history.go(0);
        }
    }

    const handleUserLogout = async () => {
        setLoading(true);
        logOut();
        history.push('/');
        history.go(0)
    }

    const handleUserLogin = () => {
        history.push('/signin');
        history.go(0);
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
        if (isLoggedIn()) {
            return (
                <div className='action-bar'>
                    <MTTButton
                        label="New Lead"
                        onClick={ () => setNewLeadModalIsOpen(true) }
                        color="primary"
                    />
                    <span className='divider-bar' />
                    <div className='user-profile-dropdown' onClick={ handleUserMenuToggle }>
                        <Avatar uri={ userProfile.photo_uri } title={ userProfile.email } />
                    </div>
                    <Menu
                        id="main-menu"
                        anchorEl={userMenuRef}
                        keepMounted
                        open={Boolean(userMenuRef)}
                        onClose={handleUserMenuClose}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                    >
                        <MenuItem onClick={handleUserMenuClose}>Preferences</MenuItem>
                        <MenuItem onClick={handleUserMenuClose}>My roster</MenuItem>
                        <MenuItem onClick={handleUserMenuClose}>Calendar</MenuItem>
                        <MenuItem onClick={handleUserLogout} className="logout-menu-item" >Log Out</MenuItem>
                    </Menu>
                    <NewLeadModal
                        artistName={searchAddArtist}
                        isOpen={ newLeadModalIsOpen }
                        onClose={ handleNewLeadModalClose }
                        onSubmit={ handleNewLeadModalSubmit }
                    />
                </div>
            )
        } else {
            return (
                <div className='action-bar'>
                    <MTTButton
                        label="Login"
                        onClick={ handleUserLogin }
                        color="secondary"
                    />
                </div>
            )
        }
    }

    return (
        <div className='main-header'>
            <MTTLogo onClick={ navigateBackHome } />
            <SearchBar onSubmit={ handleSearchBarSubmit } onAddNewLead={ onAddNewLead } />
            { renderMenu() }
        </div>
    )
}

export default MainHeader;