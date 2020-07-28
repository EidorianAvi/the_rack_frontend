import React from "react";

const Banner = ({ menButton, womenButton }) => {
  return (
    <div className="banner">
      <h1>theRack</h1>
      <div className="buttons">
        <button onClick={menButton}>Men</button>
        <button onClick={womenButton}>Women</button>
        <button>Collection</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Banner;
