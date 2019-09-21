import React from 'react';
import './SaveFavouriteButton.css';

const SaveFavouriteButton = ({onSaveFavourite}) => {
    return(
        <button className="saveFavButton" onClick={onSaveFavourite}>Lagre din favoritt</button>
    );
};

export default SaveFavouriteButton;
