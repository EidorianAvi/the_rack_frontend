import React from 'react';
import SelectOption from './SelectOption';
import CurrentView from './CurrentView';




const SelectPage = ({shoes, currentView, selectCurrentView}) => {

    const renderOptions = () => {
        return shoes.map(shoe => <SelectOption key={shoe.id} {...shoe} selectCurrentView={selectCurrentView}/>)
    }

    return (
        <div className='select-page'>
            <div className="select-options">
                <p>View:</p>
                {renderOptions()}
            </div>
            <div className="select-view">
                <CurrentView currentView={currentView} />
            </div>
        </div>
    );
}

export default SelectPage;
