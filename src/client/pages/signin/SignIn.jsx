import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import './sign-in.scss';
import MTTLogo from '../../components/common/MTTLogo/MTTLogo';
import MTTIcon from '../../components/common/MTTIcon/MTTIcon';
import { useAppState } from '../../store';

const SignIn = ({

}) => {
    const history = useHistory();
    const { setLoading } = useAppState();

    const handleGoogleLogin = () => {
        setLoading(true);
        history.push("/auth/signin");
        history.go(0)
    }

    return (
        <div className='sign-in'>
            <div className='sign-in-content card'>
                <div className='sign-in-header'>
                    <h1 className='sign-in-title'>Log in to Mint Talent Tracker</h1>
                    <MTTLogo />
                </div>
                <div className='sign-in-actions'>
                    <div className='continue-with-google' onClick={ handleGoogleLogin } >
                        <MTTIcon type='google-small' />
                        <h3>Continue with Google</h3>
                    </div>
                </div>
                <div className='sign-in-footer'>
                    <span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SignIn;