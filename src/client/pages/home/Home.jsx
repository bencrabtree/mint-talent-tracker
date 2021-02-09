import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import MainHeader from '../../components/MainHeader/MainHeader';

const Home = ({ }) => {
    const [ contentId, setContentId ] = useState('home');

    const renderAppContent = () => {}

    return (
        <div className="mtt-home">
            <MainHeader />
            { renderAppContent() }
        </div>
    )
}

export default Home;