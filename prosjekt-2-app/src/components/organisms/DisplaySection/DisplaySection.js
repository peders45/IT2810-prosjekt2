import React from 'react';
import SoundPlayer from '../../atoms/SoundPlayer/SoundPlayer';
import TextArea from '../../atoms/TextArea/TextArea'
import ImageBox from '../../atoms/ImageBox/ImageBox'
import './DisplaySection.css';

const DisplaySection = ({selectedTab, selectedText, selectedImage}) => {
    return(
        <div className="DisplaySection-container">
            <h1>{selectedTab}</h1>
            <div className="text-sound">
              <SoundPlayer />
              <TextArea selectedText={selectedText} selectedTab={selectedTab}/>
              <ImageBox selectedImage={selectedImage} selectedTab={selectedTab}/>
            </div>
        </div>
    );
};

export default DisplaySection;
