import React from 'react';

const MaybeCard = (props) => {
    
    const handleClick = (event) => {
        props.removeFromPossibles(props)
    }
    
    
    return (
        <div className="maybe-card">
            <button onClick={handleClick}>x</button>
            <img src={props.image} alt="Oops!"/>
        </div>
    );
}

export default MaybeCard;
