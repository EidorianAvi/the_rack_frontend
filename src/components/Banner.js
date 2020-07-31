import React from "react";

const Banner = ({ menButton, womenButton, collectionButton, loginButton, logoutUser }) => {
  
  const handleClick = (event) => {
      loginButton();
  }
  
  return (
    <div className="banner">
      <h1>theRack</h1>
      <div className="buttons">
        <button onClick={menButton}>Men</button>
        <button onClick={womenButton}>Women</button>
        <button onClick={collectionButton}>Collection</button>
        {localStorage.token 
        ? <button onClick={() => logoutUser()}>Logout</button>
        : <button onClick={handleClick}>Login</button>}
      </div>
    </div>
  );
};

export default Banner;
