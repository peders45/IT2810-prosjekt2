import React from 'react'
import CategoryButton from '../../atoms/CategoryButton/CategoryButton'

const CheckboxSection = ({ category }) => {
    return(
        <ul>
            {category.map(cat => {
                return(
                <li>
                   <CategoryButton>{cat}</CategoryButton>
                </li>);
            })}
        </ul>
    );
};

export default CheckboxSection;