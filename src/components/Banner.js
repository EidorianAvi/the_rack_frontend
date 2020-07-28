import React from "react";

const Banner = ({ menButton, womenButton, collectionButton }) => {
  return (
    <div className="banner">
      <h1>theRack</h1>
      <div className="buttons">
        <button onClick={menButton}>Men</button>
        <button onClick={womenButton}>Women</button>
        <button onClick={collectionButton}>Collection</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Banner;
