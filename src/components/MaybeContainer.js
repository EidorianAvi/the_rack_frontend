import React from "react";
import MaybeCard from "./MaybeCard";


const MaybeContainer = ({ shoes, removeFromPossibles }) => {
  const maybeShoes = () => {
    return shoes.map((shoe) => <MaybeCard key={shoe.id} {...shoe} removeFromPossibles={removeFromPossibles} />);
  };
  return (
    <div className="maybe-container">
      <div className="diagonal">
        <h2>Favorites</h2>
        <p>(choose 3)</p>
      </div>
      {maybeShoes()}
      <button>View</button>
    </div>
  );
};

export default MaybeContainer;
