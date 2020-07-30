import React from "react";

const CurrentView = ({ currentView }) => {
  return (
    <div className="current-view">
      <section>
        <h2>{currentView.name}</h2>
        <div className="current-view-info-box">
          <ul className="current-view-info">
            <li>{currentView.brand.toUpperCase()}</li>
            <li>{currentView.colors}</li>
            <li>${currentView.retail_price}</li>
            <li>{currentView.gender.toUpperCase()}</li>
            <li>{currentView.title}</li>
          </ul>
        </div>
        <button>Add to Collection</button>
      </section>
      <div className="current-view-image">
        <img src={currentView.image} />
      </div>
    </div>
  );
};

export default CurrentView;
