import React from 'react';
import './ShowFavouriteButton.css';

//Functional component for a Button, showing the stored favourite
//Takes in a function for handling the onClick event as props
const ShowFavouriteButton = ({onShowFavourite}) => {
    return(
        <button className="showFavButton" onClick={onShowFavourite}>Vis din favoritt</button>
    );
};

export default ShowFavouriteButton;
