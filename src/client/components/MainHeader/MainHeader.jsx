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

const MainHeader = ({ }) => {
    const history = useHistory();
    const { addNewClient, fullRoster } = useAppState();
    const [ userMenuRef, setUserMenuRef ] = useState();
    const [ searchAddArtist, setSearchAddArtist ] = useState();
    const [ newLeadModalIsOpen, setNewLeadModalIsOpen ] = useState(false);

    const navigateBackHome = () => {
        if (history.location.pathname != '/home') {
            history.push("/home")
        }
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
                <MTTIcon type="add-icon" style="round" onClick={() => setNewLeadModalIsOpen(true)} />
                <MTTIcon type="settings" style="round" />
                <MTTIcon type="default-avatar" style="round" onClick={ handleUserMenuToggle } />
                <Menu
                    id="simple-menu"
                    anchorEl={userMenuRef}
                    keepMounted
                    open={Boolean(userMenuRef)}
                    onClose={handleUserMenuClose}
                >
                    <MenuItem onClick={handleUserMenuClose}>My profile</MenuItem>
                    <MenuItem onClick={handleUserMenuClose}>My agents</MenuItem>
                    <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
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