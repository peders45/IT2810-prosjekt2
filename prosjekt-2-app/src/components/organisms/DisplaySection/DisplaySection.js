import React from 'react';
import SoundPlayer from '../../atoms/SoundPlayer/SoundPlayer';
import TextArea from '../../atoms/TextArea/TextArea';
import ImageBox from '../../atoms/ImageBox/ImageBox';
import './DisplaySection.css';

const DisplaySection = ({
  selectedTab,
  selectedText,
  selectedImage,
  selectedSound
}) => {
  return (
    <div className="DisplaySection-wrapper">
      <div className="DisplaySection-container">
        <div className="text-sound">
          <ImageBox selectedImage={selectedImage} selectedTab={selectedTab} />
          <SoundPlayer
            selectedSound={selectedSound}
            selectedTab={selectedTab}
          />
          <TextArea selectedText={selectedText} selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default DisplaySection;
