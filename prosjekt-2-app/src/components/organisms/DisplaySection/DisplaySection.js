import React from 'react';
import SoundPlayer from '../../atoms/SoundPlayer/SoundPlayer';
import TextArea from '../../atoms/TextArea/TextArea'
import './DisplaySection.css';

const DisplaySection = ({selectedTab, selectedText}) => {
    return(
        <div className="DisplaySection-container">
            <h1>{selectedTab}</h1>
            <div className="text-sound">
              <SoundPlayer />
              <TextArea selectedText={selectedText} selectedTab={selectedTab}/>
            </div>
        </div>
    );
};

export default DisplaySection;
