import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeContainer = ({shoes, addToPossibles}) => {

    const renderShoes = () => {
        return shoes.map(shoe => <ShoeCard key={shoe.id} {...shoe} addToPossibles={addToPossibles} />)
    }

    return(
        <div className="shoe-container">
            {renderShoes()}
        </div>
    ) 
};

export default ShoeContainer;
