import React from "react";

const ShoeCard = (props) => {
  return (
    <div className="shoe-card">
      <img src={props.image} alt="Oh no!" />
      <ul className="card-info">
        <li>{props.name}</li>
        <li>{props.retail_price}</li>
      </ul>
    </div>
  );
};

export default ShoeCard;
