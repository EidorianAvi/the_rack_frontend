import React from 'react';

const CollectionPage = (props) => {
    return localStorage.token ? (
        <div className="collection-page">
            <h2>{props.user.username}'s Closet</h2>
        </div>
    ) : null
}

export default CollectionPage;
