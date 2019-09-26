import React from 'react'
import './CategoryButton.css'

//Functional radio-button component for selecting media
//Takes in the selected media, function for setting selected media and name (children) as props
const CategoryButton = ({ children, selected, setSelected}) => {
    return(
        <label className="container">
            <input className="checkbox"
                type="radio"
                checked={selected === children}
                onChange={() => setSelected(children)}
            />
            <span className="checkmark"></span>
            <div>{children}</div>
        </label>
    );
};

export default CategoryButton;
