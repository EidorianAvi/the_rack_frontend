import React from "react";

const FilterBar = ({ allButton, brandFilter, priceFilter }) => {
  const handleAll = (event) => {
    allButton();
  };

  const handleBrand = (event) => {
    brandFilter(event.target.value);
  };

  const handlePrice = (event) => {
    priceFilter(event.target.value);
  };

  return (
    <div className="filter-bar">
      <h2>Brands</h2>
      <button onClick={handleAll}>All</button>
      <button onClick={handleBrand} value="adidas">
        Adidas
      </button>
      <button onClick={handleBrand} value="ASICS">
        ASICS
      </button>
      <button onClick={handleBrand} value="Jordan">
        Jordan
      </button>
      <button onClick={handleBrand} value="New Balance">
        New Balance
      </button>
      <button onClick={handleBrand} value="Nike">
        Nike
      </button>
      <button onClick={handleBrand} value="Puma">
        Puma
      </button>
      <button onClick={handleBrand} value="Reebok">
        Reebok
      </button>
      <button onClick={handleBrand} value="Under Armour">
        Under Armour
      </button>
      <h2>Price Range</h2>
      <button onClick={handlePrice} value="low">
        0-100
      </button>
      <button onClick={handlePrice} value="mid">
        100-200
      </button>
      <button onClick={handlePrice} value="high">
        200+
      </button>
    </div>
  );
};

export default FilterBar;
