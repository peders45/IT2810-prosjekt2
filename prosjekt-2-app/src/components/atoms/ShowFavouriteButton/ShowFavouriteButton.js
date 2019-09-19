import React from 'react';

const ShowFavouriteButton = ({onShowFavourite}) => {
    return(
        <button onClick={onShowFavourite}>Vis din favoritt</button>
    );
};

export default ShowFavouriteButton;
