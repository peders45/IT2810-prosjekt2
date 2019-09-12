import React from 'react'
import Tab from '../../atoms/Tab/Tab'
import './TabList.css'

const TabList = ({ category, setSelectedTab, selected }) => {
    return(
        <ul>
            {category.map(cat => {
                return(
                <li>
                   <Tab setSelectedTab={setSelectedTab} selected={selected} >{cat}</Tab>
                </li>);
            })}
        </ul>
    );
};

export default TabList;