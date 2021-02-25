import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './mtt-modal.scss';
import { Modal, TextField, Chip } from '@material-ui/core';

const MTTModal = ({
    isOpen,
    onClose,
    title,
    content,
    footerElts,
    errorMessage,
    disableBackdropClick
}) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            className='mtt-modal-wrapper'
            disableBackdropClick={disableBackdropClick}
        >
                <div className="mtt-modal-content">
                    { title && <h1>{ title }</h1> }
                    { content }
                    { footerElts && footerElts.length > 0 &&
                        <div className='mtt-modal-footer'>
                            <div className='error-box'>
                                { errorMessage }
                            </div>
                            { footerElts.map((elt, key) => (
                                <div className='mtt-modal-footer-elt' key={key}>
                                    { elt }
                                </div>
                            )) }
                        </div>
                    }
                </div>
        </Modal>
    )
}

export default MTTModal;