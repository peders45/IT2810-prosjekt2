import React from 'react';
import TabList from '../../molecules/TabList/TabList'
import DisplaySection from '../DisplaySection/DisplaySection'
// import './MainPage.css';

const MainPage = ({ category, selectedTab, setSelectedTab }) => {
    return(
        <div>
            <TabList setSelectedTab={setSelectedTab} selectedTab={selectedTab} category={category}/>
            <DisplaySection selectedTab={selectedTab}/>
        </div>
    );
};

export default MainPage;