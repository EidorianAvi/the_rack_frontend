import React from "react";

const ShoeCard = (props) => {

  const handleClick = (event) => {
    props.addToPossibles(props)
  }

  return (
    <div className="shoe-card">
      <img src={props.image} alt="Oh no!" />
      <ul className="card-info">
        <li className="name">{props.name}</li>
        <li className="price">${props.retail_price}</li>
        <li className="brand">{props.brand.toUpperCase()}</li>
      </ul>
       <span><button onClick={handleClick} className="maybe-button">+</button></span>
    </div>
  );
};

export default ShoeCard;
