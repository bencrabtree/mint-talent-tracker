import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, ArtistPage } from './pages';
import './assets/sass/general.scss';
import MainHeader from './components/MainHeader/MainHeader';
import { useAppState } from './store/index';
import MTTLoading from './components/common/MTTLoading/MTTLoading';

const App = ({}) => {
    const { loading } = useAppState();

    const renderApp = () => {
        if (loading) {
            return (
                <MTTLoading />
            )
        } else {
            return (
                <div className='app'>
                    <MainHeader />
                    <div className='main-app'>
                        <Router>
                            <Switch>
                                <Route component={ ArtistPage } path="/artist/:artistName" />
                                <Route component={ Home } path="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            )
        }
    }

    return renderApp();
}

export default App;