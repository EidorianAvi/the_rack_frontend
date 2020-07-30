import React from 'react';

const CurrentView = ({currentView}) => {
    return (
        <div className="current-view">
            <img src={currentView.image}/>
        </div>
    );
}

export default CurrentView;
