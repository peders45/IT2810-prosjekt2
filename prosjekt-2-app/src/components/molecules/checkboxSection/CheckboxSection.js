import React from 'react'
import CategoryButton from '../../atoms/CategoryButton/CategoryButton'
import './CheckboxSection.css'

const CheckboxSection = ({ category, setSelected, selected }) => {
    return(
        <ul>
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