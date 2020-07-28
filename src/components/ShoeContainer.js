import React from "react";
import ShoeCard from "./ShoeCard";

const ShoeContainer = ({shoes}) => {

    const renderShoes = () => {
        return shoes.map(shoe => <ShoeCard key={shoe.id} {...shoe} />)
    }

    return(
        <div className="shoe-container">
            {renderShoes()}
        </div>
    ) 
};

export default ShoeContainer;

// class ShoeContainer extends React.Component {
    
//     state = {
//         filtered: []
//     }
    
//     renderShoes = () => {
//         return this.props.shoes.map(shoe => <ShoeCard key={shoe.id} {...shoe}/>)
//     }

//     render() {
//         return (
//             <div className="shoe-container">
//                 {this.renderShoes()}
//             </div>
//         );
//     }
// }

// export default ShoeContainer;
