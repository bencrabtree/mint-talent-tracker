import React from 'react';
import PropTypes from 'prop-types';

// wraps children in link
const MTTLink = ({ href, children }) => {
    return (
        <a className='mtt-link' href={href}>
            { children }
        </a>
    )
}

MTTLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isrequired
}

export default MTTLink;