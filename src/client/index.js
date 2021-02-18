import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { UnderConstruction, App, NotAuthorized } from './pages';
import './assets/sass/general.scss';
import { AppContextProvider } from './store/appContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const Root = () => {
    return (
        <AppContextProvider>
            <Router>
                <Switch>
                    <Route path="/auth/error">
                        <NotAuthorized />
                    </Route>
                    <Route path="/under-construction">
                        <UnderConstruction />
                    </Route>
                    <Route path="/auth/isLoggedOut">
                        <div>
                            You are now logged out
                        </div>
                    </Route>
                    <Route component={ App } path="/" />
                </Switch>
            </Router>
        </AppContextProvider>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
