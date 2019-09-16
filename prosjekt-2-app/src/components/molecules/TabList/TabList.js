import React from 'react'
import Tab from '../../atoms/Tab/Tab'
import './TabList.css'

const TabList = ({ category, setSelectedTab, selectedTab }) => {
    return(
        <ul>
            {category.map((cat, i) => {
                return(
                <li key={"t"+i}>
                   <Tab setSelectedTab={setSelectedTab} selectedTab={selectedTab} >{cat}</Tab>
                </li>);
            })}
        </ul>
    );
};

export default TabList;