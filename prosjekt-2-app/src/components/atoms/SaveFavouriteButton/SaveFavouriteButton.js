import React from 'react';
import './SaveFavouriteButton.css';

//Functional component for a Button, saving the set favourite combinations of theme and media
//Takes in a function for handling the onClick event as props
const SaveFavouriteButton = ({onSaveFavourite}) => {
    return(
        <button className="saveFavButton" onClick={onSaveFavourite}>Lagre din favoritt</button>
    );
};

export default SaveFavouriteButton;
