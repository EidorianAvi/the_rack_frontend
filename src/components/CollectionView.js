import React from "react";

const CollectionView = ({ collectionView }) => {
  const handleClick = (event) => {};

  return (
    <div className="collection-view">
      <div className="current-view-image">
        <img src={collectionView.image} alt="Oh no!" />
      </div>
      <div className="collection-view-info">
        <h2>{collectionView.name}</h2>

        <ul >
          <li>{collectionView.brand}</li>
          <li>{collectionView.colors}</li>
          <li>${collectionView.retail_price}</li>
          <li>{collectionView.gender}</li>
          <li>{collectionView.title}</li>
        </ul>
        <button onClick={handleClick}>Remove from collection</button>
      </div>
    </div>
  );
};

export default CollectionView;
