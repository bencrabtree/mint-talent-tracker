import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { http } from '../../util/api';
import { getSession } from '../../util/jwt';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                getSession() ? (
                    <Component {...props} />
                ) : (
                    <LoginPage />
                )
            }
        />
    );
};

const LoginPage = () => {
    // http.get('/auth/signin')
    return (
        <Redirect to='/auth/signin' />
    )
}

export default PrivateRoute;