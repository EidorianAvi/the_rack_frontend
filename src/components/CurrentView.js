import React from "react";

const CurrentView = ({ currentView, addToCollection }) => {
  
  let token = localStorage.token
  
  console.log(token)

  const handleClick = (event) => {
    addToCollection(currentView.id);
  }
  
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
        { localStorage.token  
        ?  <button onClick={handleClick}>Add to Collection</button>
        : <button>Must be logged in</button>
        }
      </section>
      <div className="current-view-image">
        <img src={currentView.image} alt="Oh no!"/>
      </div>
    </div>
  );
};

export default CurrentView;
