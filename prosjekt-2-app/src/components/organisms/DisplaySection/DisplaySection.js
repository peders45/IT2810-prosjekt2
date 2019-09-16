import React from 'react';
import SoundSection from '../../molecules/SoundSection/SoundSection';
import './DisplaySection.css';

const DisplaySection = ({selectedTab}) => {
    return(
        <div className="DisplaySection-container">
            <h1>{selectedTab}</h1>
            <SoundSection />
        </div>
    );
};

export default DisplaySection;
