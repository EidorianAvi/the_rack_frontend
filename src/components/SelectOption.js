import React from 'react';

const SelectOption = (props) => {
    return (
        <div className='select-option'>
            <img onClick={props.selectCurrentView} src={props.image} alt="Oh no!" />
        </div>
    );
}

export default SelectOption;
