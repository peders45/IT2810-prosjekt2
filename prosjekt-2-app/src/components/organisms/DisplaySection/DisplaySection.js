import React from 'react';
import SoundPlayer from '../../atoms/SoundPlayer/SoundPlayer';
import TextArea from '../../atoms/TextArea/TextArea'
import ImageBox from '../../atoms/ImageBox/ImageBox'
import './DisplaySection.css';

const DisplaySection = ({selectedTab, selectedText, selectedImage, selectedSound}) => {
    return(
        <div className="DisplaySection-container">
            <div className="text-sound">
              <SoundPlayer selectedSound={selectedSound} selectedTab={selectedTab}/>
              <TextArea selectedText={selectedText} selectedTab={selectedTab}/>
              <ImageBox selectedImage={selectedImage} selectedTab={selectedTab}/>
            </div>
        </div>
    );
};

export default DisplaySection;
