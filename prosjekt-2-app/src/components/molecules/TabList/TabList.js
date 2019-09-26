import React from 'react'
import Tab from '../../atoms/Tab/Tab'
import './TabList.css'

//Functional component mapping Tab components into a section of radiobuttons
//Takes in the name of the tab category, a function for setting the selected tab and selected tab as props
const TabList = ({ category, setSelectedTab, selectedTab }) => {
    return(
        <ul className='tabList'>
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