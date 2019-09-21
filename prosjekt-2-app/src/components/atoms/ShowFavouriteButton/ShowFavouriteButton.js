import React from 'react';
import './ShowFavouriteButton.css';

const ShowFavouriteButton = ({onShowFavourite}) => {
    return(
        <button className="showFavButton" onClick={onShowFavourite}>Vis din favoritt</button>
    );
};

export default ShowFavouriteButton;
