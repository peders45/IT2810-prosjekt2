import React from 'react';

const SaveFavouriteButton = ({onSaveFavourite}) => {
    return(
        <button onClick={onSaveFavourite}>Lagre din favoritt</button>
    );
};

export default SaveFavouriteButton;
