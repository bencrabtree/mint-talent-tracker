import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './app.scss';
import { useAppState } from '../../store/index';
import MainHeader from '../../components/MainHeader/MainHeader';
import MTTLoading from '../../components/common/MTTLoading/MTTLoading';

const App = ({ }) => {
    const { loading } = useAppState();
    const [ contentId, setContentId ] = useState('home');

    const renderAppContent = () => {}

    const renderApp = () => {
        if (loading) {
            return (
                <MTTLoading />
            )
        } else {
            return (
                <div className="mtt-home">
                    <MainHeader />
                    { renderAppContent() }
                </div>
            )
        }
    }

    return renderApp();
}

export default App;