import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './artist-page.scss';
import MTTLoading from '../../components/common/MTTLoading/MTTLoading';
import { getArtistImageSrc } from '../../util/constants';
import { artistService } from '../../services';
import { useAppState } from '../../store';

const ArtistPage = ({
    match
}) => {
    const { fullRoster } = useAppState();
    const [ selectedArtist, setSelectedArtist ] = useState();

    useEffect(() => {
        changeSelectedArtist();
    }, [ match.params.artistName ]);

    const changeSelectedArtist = async () => {
        console.log(match.params.artistName)
        if (
            match.params.artistName && 
            fullRoster.find(x => x.full_name === match.params.artistName)
        ) {
                let artist = await artistService.getArtist(match.params.artistName);
                setSelectedArtist(artist);
        }
    }

    const renderArtistContent = () => {
        if (!selectedArtist) {
            return <MTTLoading />
        } else {
            console.log(selectedArtist)
            return (
                <div className="artist-page">
                    <div className="artist-side-menu">
                        <div className="artist-profile">
                            <div className='artist-profile-picture'>
                                <img src={ getArtistImageSrc(selectedArtist.photo_uri)} />
                            </div>
                            <h1>{ selectedArtist.full_name }</h1>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return renderArtistContent();
}

export default ArtistPage;