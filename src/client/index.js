import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { UnderConstruction, Home, NotAuthorized } from './pages';
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
                <Route path="/auth/error">
                    <NotAuthorized />
                </Route>
                <Route path="/auth/isLoggedOut">
                    <div>
                        You are now logged out
                    </div>
                </Route>
            </Router>
        </AppContextProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
