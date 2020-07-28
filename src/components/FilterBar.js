import React from "react";

const FilterBar = ({ brandFilter }) => {
  const handleClick = (event) => {
    brandFilter(event.target.value);
  };

  return (
    <div className="filter-bar">
      <h2>Brands</h2>
      <button onClick={handleClick} value="adidas">
        Adidas
      </button>
      <button onClick={handleClick} value="ASICS">
        ASICS
      </button>
      <button onClick={handleClick} value="Jordan">
        Jordan
      </button>
      <button onClick={handleClick} value="New Balance">
        New Balance
      </button>
      <button onClick={handleClick} value="Nike">
        Nike
      </button>
      <button onClick={handleClick} value="Puma">
        Puma
      </button>
      <button onClick={handleClick} value="Reebok">
        Reebok
      </button>
      <button onClick={handleClick} value="Under Armour">
        Under Armour
      </button>
      <h2>Price Range</h2>
      <button>0-100</button>
      <button>100-200</button>
      <button>200+</button>
    </div>
  );
};

export default FilterBar;
