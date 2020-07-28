import React from "react";

const ShoeCard = (props) => {
  return (
    <div className="shoe-card">
      <img src={props.image} alt="Oh no!" />
      <ul className="card-info">
        <li className="name">{props.name}</li>
        <li className="price">${props.retail_price}</li>
        <li className="brand">{props.brand.toUpperCase()}</li>
      </ul>
    </div>
  );
};

export default ShoeCard;
