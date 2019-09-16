import React from 'react'
import './CategoryButton.css'

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
