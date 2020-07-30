import React from 'react';

const SelectOption = (props) => {
    
    const handleClick = (event) => {
        props.selectCurrentView(props);
    }
    
    return (
        <div className='select-option'>
            <img onClick={handleClick} src={props.image} alt="Oh no!" />
        </div>
    );
}

export default SelectOption;
