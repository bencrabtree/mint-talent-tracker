import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './main-header.scss';
import MTTLogo from '../common/MTTLogo/MTTLogo';
import NewLeadModal from '../../components/NewLeadModal/NewLeadModal';
import SearchBar from '../SearchBar/SearchBar';
import MTTIcon from '../common/MTTIcon/MTTIcon';

const MainHeader = ({ }) => {
    const history = useHistory();
    const [ searchAddArtist, setSearchAddArtist ] = useState();
    const [ newLeadModalIsOpen, setNewLeadModalIsOpen ] = useState(false);

    const navigateBackHome = () => {
        console.log(history)
        if (true) {
            history.push("/home")
        }
    }

    const onAddNewLead = (leadEntry) => {
        console.log(leadEntry)
        setSearchAddArtist(leadEntry);
        setNewLeadModalIsOpen(true);
    }

    const handleNewLeadModalClose = () => {
        setSearchAddArtist(null);
        setNewLeadModalIsOpen(false);
    }

    const handleNewLeadModalSubmit = (value) => {
        console.log('submitting', value)
    }

    const handleSearchBarSubmit = (query) => {
        console.log('fOUND This', query)
    }

    return (
        <div className='main-header'>
            <MTTLogo onClick={ navigateBackHome } />
            <SearchBar onSubmit={ handleSearchBarSubmit } onAddNewLead={ onAddNewLead } />
            <div className='action-bar'>
                <MTTIcon type="add-icon" style="round" onClick={() => setNewLeadModalIsOpen(true)} />
                <MTTIcon type="settings" style="round" />
                <MTTIcon type="default-avatar" style="round" />
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