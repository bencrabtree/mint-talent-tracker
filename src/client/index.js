import React from 'react';
import ReactDOM from 'react-dom';
import UnderConstruction from './underconstruction/UnderConstruction';
import './assets/sass/general.scss';

const Root = () => {
    return (
        <div>
            <UnderConstruction />
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
