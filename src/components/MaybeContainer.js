import React from "react";
import MaybeCard from "./MaybeCard";

const MaybeContainer = ({ shoes, removeFromPossibles, renderSelectPage}) => {
  const maybeShoes = () => {
    return shoes.map((shoe) => (
      <MaybeCard
        key={shoe.id}
        {...shoe}
        removeFromPossibles={removeFromPossibles}
      />
    ));
  };

  const handleClick = (event) => {
    renderSelectPage();
  };

  return (
    <div className="maybe-container">
      <div className="diagonal">
        <h2>Favorites</h2>
        <p>(choose 3)</p>
      </div>
      {maybeShoes()}
      <div className="select">
        <button onClick={handleClick}>Select</button>
      </div>
    </div>
  );
};

export default MaybeContainer;
