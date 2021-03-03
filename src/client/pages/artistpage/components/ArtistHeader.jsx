import React from 'react';
import { getArtistImageSrc } from '../../../util/constants';
import ProgressStepper from '../../../components/common/ProgressStepper/ProgressStepper';
import MTTButton from '../../../components/common/MTTButton/MTTButton';
import { LeadStatus } from '../../../../shared/util/types';

const ArtistHeader = ({
    artist,
    onWatchClick,
    onEditClick,
    onUpdateClick
}) => {
    return (
        <div className="artist-header card">
            <div className="top-content">
                {/* <div className='lead-content'> */}
                    <div className='artist-profile'>
                        <img className='artist-picture'
                            src={ getArtistImageSrc(artist.photo_uri) }
                        />
                        <div className='artist-name'>
                            <h2>Artist</h2>
                            <h1>{ artist.full_name }</h1>
                        </div>
                    </div>
                    <div className='divider-bar' />
                    <div className='lead-status'>
                        <ProgressStepper
                            steps={[
                                { id: 'thinking', label: LeadStatus.Thinking },
                                { id: 'approached', label: LeadStatus.Approached },
                                { id: 'contract-sent', label: LeadStatus.ContractSent },
                                { id: 'signed', label: LeadStatus.Signed }
                            ]}
                            currentStep="approached"
                        />
                    </div>
                {/* </div> */}
                <div className='lead-actions'>
                        <MTTButton
                            label="+ Watch"
                            type="secondary"
                            onClick={ onWatchClick }
                        />
                        <MTTButton
                            label="Edit"
                            type="primary"
                            onClick={ onEditClick }
                        />
                        <MTTButton
                            label="Update"
                            type="tertiary"
                            onClick={ onUpdateClick }
                        />
                </div>
            </div>
            <div className='bottom-content'>
                <div className='artist-stat'>
                    <h3>Current Stage</h3>
                    <h2>Approached</h2>
                </div>
                <div className='artist-stat'>
                    <h3>Start Date</h3>
                    <h2>3/2/2021</h2>
                </div>
                <div className='artist-stat'>
                    <h3>Last Update</h3>
                    <h2>3/2/2021</h2>
                </div>
                <div className='artist-stat'>
                    <h3>Account Owner</h3>
                    <h2>Ben Crabtree</h2>
                </div>
            </div>
        </div>
    )
}

export default ArtistHeader;