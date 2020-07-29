import React from 'react';

const MaybeCard = (props) => {
    
    const handleClick = (event) => {
        props.removeFromPossibles(props)
    }
    
    
    return (
        <div className="maybe-card">
            <img src={props.image} alt="Oops!"/>
            <button onClick={handleClick}>x</button>
        </div>
    );
}

export default MaybeCard;
