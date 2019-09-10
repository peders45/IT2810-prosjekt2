import React from 'react'

const CategoryButton = ({ children, checked }) => {
    return(
        <label>
            <input
                type="radio"
            />
            <div>{children}</div>
        </label>
    );
};

export default CategoryButton;