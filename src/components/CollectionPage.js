import React from 'react';

const CollectionPage = (props) => {
    return localStorage.token
    ? <h2>YES</h2>
    : <h2>NO</h2>
}

export default CollectionPage;
