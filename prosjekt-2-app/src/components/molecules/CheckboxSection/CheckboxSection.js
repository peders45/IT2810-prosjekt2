import React from 'react'
import CategoryButton from '../../atoms/CategoryButton/CategoryButton'
import './CheckboxSection.css'

//Functional component mapping CategoryButton components into a section of radiobuttons
//Takes in the name of the media category, a function for setting the selected category and selected category as props
const CheckboxSection = ({ category, setSelected, selected }) => {
    return(
        <ul className="checkboxSection">
            {category.map((cat, i) => {
                return(
                <li key={"C" + i}>
                   <CategoryButton setSelected={setSelected} selected={selected} >{cat}</CategoryButton>
                </li>);
            })}
        </ul>
    );
};

export default CheckboxSection;