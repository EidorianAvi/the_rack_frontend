import React from 'react';

const CollectionOption = (props) => {

    const handleClick = (event) => {
        // props.selectCurrentView(props);
    }

    return (
        <div className='collection-option'>
            <img onClick={handleClick} src={props.image} alt="Oh no!" />
        </div>
    );
}

export default CollectionOption;
