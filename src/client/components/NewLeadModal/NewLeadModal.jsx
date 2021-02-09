import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './new-lead-modal.scss';
import { Modal } from '@material-ui/core';
import MTTButton from '../common/MTTButton/MTTButton';

const NewLeadModal = ({
    isOpen,
    onClose,
    onSubmit,
    artistName
}) => {
    /**
     * 
     */
    const [ newLead, setNewLead ] = useState({
        full_name: "",
        instagram: "",
        spotify: "",
        soundcloud: "",
        apple_music: "",
        facebook: "",
        snapchat: "",
        tiktok: "",
        notes: "",
        tags: ""
    });

    /**
     * 
     */
    const handleSubmit = () => {
        onSubmit(newLead);
        setNewLead({})
    }

    /**
     * 
     */
    const handleClose = () => {
        setNewLead({})
    }

    return (
            <Modal
                open={isOpen}
                onClose={onClose}
                className='new-lead-modal-wrapper'
                disableBackdropClick
            >
                <div className="new-lead-modal-content">
                    <h1>Add New Lead</h1>
                    <div className='new-lead-form'>

                    </div>
                    <div className='new-lead-modal-footer'>
                        <MTTButton label="Save" onClick={handleSubmit} />
                        <MTTButton label="Cancel" onClick={handleClose} />
                    </div>
                </div>
            </Modal>
    )
}

export default NewLeadModal;