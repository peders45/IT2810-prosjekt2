import React from 'react';
import SoundPlayer from '../../atoms/SoundPlayer/SoundPlayer';
import './DisplaySection.css';

const DisplaySection = ({selectedTab}) => {
    return(
        <div className="DisplaySection-container">
            <h1>{selectedTab}</h1>
            <SoundPlayer />
        </div>
    );
};

export default DisplaySection;
