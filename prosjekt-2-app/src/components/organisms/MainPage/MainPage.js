import React from 'react';
import TabList from '../../molecules/TabList/TabList'
import DisplaySection from '../DisplaySection/DisplaySection'
// import './MainPage.css';

const MainPage = ({ category, selected, setSelectedTab }) => {
    return(
        <div>
            <TabList setSelectedTab={setSelectedTab} selected={selected} category={category}/>
            <DisplaySection/>
        </div>
    );
};

export default MainPage;