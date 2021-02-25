import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import { useAppState } from '../../store/index';
import { getArtistImageSrc } from '../../util/constants';

const Home = ({ }) => {
    const { fullRoster, selectedArtist } = useAppState();
    const [ contentId, setContentId ] = useState('home');

    const renderAppContent = () => {}

    return (
        <div className="mtt-home">
            { renderAppContent() }
        </div>
    )
}

export default Home;