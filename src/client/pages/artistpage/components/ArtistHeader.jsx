import React from 'react';
import { getArtistImageSrc } from '../../../util/constants';
import ProgressStepper from '../../../components/common/ProgressStepper/ProgressStepper';
import MTTButton from '../../../components/common/MTTButton/MTTButton';
import { LeadStatus } from '../../../../shared/util/types';
import MTTIcon from '../../../components/common/MTTIcon/MTTIcon';

const ArtistHeader = ({
    artist,
    onWatchClick,
    onEditClick,
    onUpdateClick
}) => {

    const handleInfoSelect = () => {
        alert(`Selected ${artist.full_name}`)
    }

    return (
        <div className="artist-header card">
            <div className="top-content">
                <div className='artist-profile'>
                    <img className='artist-picture'
                        src={ getArtistImageSrc(artist.photo_uri) }
                    />
                    <div className='artist-name'>
                        <h2>Artist</h2>
                        <span>
                            <h1>{ artist.full_name }</h1>
                            <MTTIcon
                                type='info'
                                style='round'
                                onClick={ handleInfoSelect }
                                title="More info"
                            />
                        </span>
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
                    <h4 className='artist-stat-label'>Current Stage</h4>
                    <h3 className='artist-stat-value'>Approached</h3>
                </div>
                <div className='artist-stat'>
                    <h4 className='artist-stat-label'>Start Date</h4>
                    <h3 className='artist-stat-value'>3/2/2021</h3>
                </div>
                <div className='artist-stat'>
                    <h4 className='artist-stat-label'>Last Update</h4>
                    <h3 className='artist-stat-value'>3/2/2021</h3>
                </div>
                <div className='artist-stat'>
                    <h4 className='artist-stat-label'>Account Owner</h4>
                    <h3 className='artist-stat-value'>Ben Crabtree</h3>
                </div>
            </div>
        </div>
    )
}

export default ArtistHeader;