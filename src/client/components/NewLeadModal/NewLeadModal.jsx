import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './new-lead-modal.scss';
import { useAppState } from '../../store';
import { Modal, TextField, Chip } from '@material-ui/core';
import MTTModal from '../common/MTTModal/MTTModal';
import { Autocomplete } from '@material-ui/lab';
import MTTButton from '../common/MTTButton/MTTButton';
import MTTLoading from '../common/MTTLoading/MTTLoading';
import MTTInput from '../common/MTTInput/MTTInput';
import MTTDropzone from '../common/MTTDropzone/MTTDropzone';
import { getLabel } from '../../util/constants';
import { http } from '../../util/api';
import { cloneDeep } from 'lodash';

const NewLeadModal = ({
    isOpen,
    onClose,
    onSubmit,
    artistName
}) => {
    /**
     * 
     */
    const [ newLead, setNewLead ] = useState([]);
    const [ model, setModel ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const { allTags, fullRoster } = useAppState();

    useEffect(() => {
        getNewLeadModel();
    }, [ isOpen ]);

    const getNewLeadModel = async () => {
        setLoading(true);
        try {
            const { status, data } = await http.get('/roster/new-lead-model');
            if (data && status === 200) {
                console.log("GetNewLeadModel: Success:", status);
                let tempModel = data;
                setModel(tempModel);
                const idx = tempModel.findIndex(x => x.id === 'full_name');
                tempModel[idx].data = artistName;
                tempModel = tempModel.concat([
                    { id: "notes", data: "" }
                ]);
                setNewLead(tempModel);
                setLoading(false);
            } else {
                console.log("GetNewLeadModel: BadResponse:", status)
            }
        } catch (error) {
            console.log("GetNewLeadModel:", error)
        }
    }

    /**
     * 
     */
    const handleSubmit = () => {
        onSubmit(newLead);
        onClose();
    }

    /**
     * 
     */
    const handleClose = () => {
        onClose();
    }

    /**
     * 
     */
    const handleInputChange = (id, value) => {
        console.log(newLead)
        let tempModel = cloneDeep(newLead);
        const idx = tempModel.findIndex(x => x.id === id);
        tempModel[idx].data = value;
        console.log(id, value, tempModel)
        setNewLead(tempModel);
    }

    /**
     * 
     */
    const generateNewLeadForm = () => {
        return (
            <div className='new-lead-inputs'>
                { model.map((elt, key) => {
                    if (getLabel[elt.id]) {
                        return (
                            <MTTInput
                                key={key}
                                id={elt.id}
                                label={getLabel[elt.id]}
                                value={elt.data}
                                onChange={ handleInputChange }
                            />
                        )
                    }
                })}
            </div>
        )
    }

    /**
     * 
     */
    const generateNewLeadExtras = () => {
        return (
            <div className='new-lead-inputs'>
                <MTTDropzone
                    id="photo_uri"
                    label="Artist Photo"
                    message='Drag or click to upload'
                    maxFileCount={1}
                    onChange={ (id, value) => handleInputChange(id, value[0]) }
                />
                <MTTDropzone
                    id="collection"
                    label="Promotional Assets"
                    message='Drag or click to upload'
                    onChange={ handleInputChange }
                />
                <MTTInput
                    id="notes"
                    type='textarea'
                    label="Notes"
                    rows="10"
                    data={newLead.find(x => x.id === 'notes')}
                    onChange={ handleInputChange }
                />
                <Autocomplete
                    multiple freeSolo
                    id="tags"
                    options={allTags}
                    onChange={(e, val) => handleInputChange('tags', val)}
                    defaultValue={newLead.find(x => x.id === 'tags')}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField {...params} variant="filled" placeholder="Artist Tags" />
                    )}
                />
            </div>
        )
    }

    const renderContent = () => {
        if (loading) {
            return (
                <div className="new-lead-modal-content">
                    <MTTLoading />
                </div>
            )
        } else {
            return (
                <div className='new-lead-form'>
                    { generateNewLeadForm() }
                    { generateNewLeadExtras() }
                </div>
            )
        }
    }

    return (
            <MTTModal
                isOpen={isOpen}
                onClose={onClose}
                disableBackdropClick={true}
                title="Add New Lead"
                content={renderContent()}
                footerElts={[
                    <MTTButton label="Save" onClick={handleSubmit} disabled={true} />,
                    <MTTButton label="Cancel" onClick={handleClose} />
                ]}
            />
    )
}

NewLeadModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    artistName: PropTypes.string
}

NewLeadModal.defaultProps = {
    artistName: ""
}

export default NewLeadModal;