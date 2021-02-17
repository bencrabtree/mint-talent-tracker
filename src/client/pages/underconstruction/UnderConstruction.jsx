import React from 'react';
import MTTIcon from '../../components/common/MTTIcon/MTTIcon';
import MTTLink from '../../components/common/MTTLink/MTTLink';
import './under-construction.scss';

const UnderConstruction = () => {

    return (
        <div className='non-home-div'>
            <div className='non-home-body'>
                <MTTIcon type='under-construction' />
                <h1>This site is under contruction.</h1>
                <h2>Come back later to see what we're building!</h2>

                <div className='mint-home-page'>
                    <h2>While you wait, check out what else we're building by clicking below.</h2>
                    <MTTLink href="https://www.minttalentgroup.com">
                        <MTTIcon type='mtg-logo-black' />
                    </MTTLink>
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction;