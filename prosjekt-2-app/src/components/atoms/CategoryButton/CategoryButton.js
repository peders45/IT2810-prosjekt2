import React from 'react'
import './CategoryButton.css'

const CategoryButton = ({ children, selected, setSelected}) => {
    return(
        <label>
            <input
                type="radio"
                checked={selected === children}
                onChange={() => setSelected(children)}
            />
            <div>{children}</div>
        </label>
    );
};

export default CategoryButton;