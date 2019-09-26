import React from 'react';
import SoundPlayer from '../../atoms/SoundPlayer/SoundPlayer';
import TextArea from '../../atoms/TextArea/TextArea';
import ImageBox from '../../atoms/ImageBox/ImageBox';
import './DisplaySection.css';

//Functional component combining all the artwork (text, images and sound) to be displayed by using their respective components
//Takes in the neccesary props and passing them to the components requiring those props
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
