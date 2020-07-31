import React from "react";
import CollectionOption from "./CollectionOption";
import CollectionView from "./CollectionView";

const CollectionPage = ({ shoes, user, selectCollectionView, collectionView }) => {
  const renderCollection = () => {

    return shoes.map((shoe) => (
      <CollectionOption
        key={shoe.id}
        {...shoe}
        selectCollectionView={selectCollectionView}
      />
    ));
  };

  return localStorage.token ? (
    <div className="collection-page">
      <div className="collection-header">
        <h2>{user.username}'s Closet</h2>
      </div>
      <div className="collection-body">
        <div className="collection-shoes">{renderCollection()}</div>
        <div className="collection-view">
          <CollectionView collectionView={collectionView} />
        </div>
      </div>
    </div>
  ) : null;
};

export default CollectionPage;
