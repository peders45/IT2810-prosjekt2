import React from 'react'
import Tab from '../../atoms/Tab/Tab'
import './TabList.css'

const TabList = ({ category, setSelectedTab, selectedTab }) => {
    return(
        <ul>
            {category.map(cat => {
                return(
                <li>
                   <Tab setSelectedTab={setSelectedTab} selectedTab={selectedTab} >{cat}</Tab>
                </li>);
            })}
        </ul>
    );
};

export default TabList;