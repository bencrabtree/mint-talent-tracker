import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { UnderConstruction, Home } from './pages';
import './assets/sass/general.scss';
import { AppContextProvider } from './store/appContext';

const Root = () => {
    return (
        <AppContextProvider>
            <Router>
                <Route exact path="/">
                    <UnderConstruction />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Router>
        </AppContextProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
