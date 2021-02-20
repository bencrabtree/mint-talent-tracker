import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import { useAppState } from '../../store/index';
import MainHeader from '../../components/MainHeader/MainHeader';
import MTTLoading from '../../components/common/MTTLoading/MTTLoading';

const Home = ({ }) => {
    const [ contentId, setContentId ] = useState('home');

    const renderAppContent = () => {}

    return (
        <div className="mtt-home">
            { renderAppContent() }
        </div>
    )
}

export default Home;