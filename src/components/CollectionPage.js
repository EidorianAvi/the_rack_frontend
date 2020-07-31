import React from "react";
import CollectionOption from "./CollectionOption";


const CollectionPage = ({shoes, user}) => {

    const renderCollection = () => {
        return shoes.map((shoe) => <CollectionOption key={shoe.id} {...shoe}/>)
    }

  return localStorage.token ? (
    <div className="collection-page">
      <div className="collection-header">
        <h2>{user.username}'s Closet</h2>
      </div>
      <div className="collection-body">
        <div className="collection-shoes">
          {renderCollection()}
        </div>
        <div className="collection-view">
          <p>test</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default CollectionPage;
