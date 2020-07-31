import React from "react";

const CollectionView = ({ collectionView }) => {


    const handleClick = (event) => {

    }

    // return(
    //     <div>

    //     </div>
    // )
    return (
        <div className="current-view">
            <div className="current-view-image">
                <img src={collectionView.image} alt="Oh no!" />
            </div>
            <section>
                <h2>{collectionView.name}</h2>
                <div className="current-view-info-box">
                    <ul className="current-view-info">
                        <li>{collectionView.brand}</li>
                        <li>{collectionView.colors}</li>
                        <li>${collectionView.retail_price}</li>
                        <li>{collectionView.gender}</li>
                        <li>{collectionView.title}</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default CollectionView;
