import React from 'react';
import TabList from '../../molecules/TabList/TabList'
import DisplaySection from '../DisplaySection/DisplaySection'
import SelectorSection from '../SelectorSection/SelectorSection'
import './MainPage.css';

const MainPage = ({ category, selectedTab, setSelectedTab, mediaCategories, setSelectedMedia, 
    selectedSound, 
    selectedImage,
    selectedText,
    setSelectedSound,
    setSelectedImage,
    setSelectedText }) => {
    return(
        <div>
            <TabList setSelectedTab={setSelectedTab} selectedTab={selectedTab} category={category}/>
            <DisplaySection selectedTab={selectedTab}/>
            <SelectorSection
                mediaCategories={mediaCategories}
                selectedSound={selectedSound}
                selectedImage={selectedImage}
                selectedText={selectedText}
                setSelectedSound={setSelectedSound}
                setSelectedImage={setSelectedImage}
                setSelectedText={setSelectedText}
            />
        </div>
    );
};

export default MainPage;