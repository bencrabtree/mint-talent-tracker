import React from 'react';
import MTTIcon from '../common/MTTIcon/MTTIcon';
import MTTLink from '../common/MTTLink/MTTLink';
import './under-construction.scss';

const UnderConstruction = () => {

    return (
        <div className='under-construction'>
            <div className='under-construction-body'>
                <MTTIcon name='under-construction' />
                <h1>This site is under contruction.</h1>
                <h2>Come back later to see what we're building!</h2>

                <div className='mint-home-page'>
                    <h2>While you wait, check out what else we're building by clicking below.</h2>
                    <MTTLink href="https://www.minttalentgroup.com">
                        <MTTIcon name='mtg-logo-black' />
                    </MTTLink>
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction;