import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages';
import './assets/sass/general.scss';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignIn from './pages/signin/SignIn';
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
                    <Router>
                        <Switch>
                            <Route component={ Home } path="/" />
                        </Switch>
                    </Router>
                </div>
            )
        }
    }

    return renderApp();
}

export default App;