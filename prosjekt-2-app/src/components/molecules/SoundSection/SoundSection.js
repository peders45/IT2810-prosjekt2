import React from 'react';
//import './SoundSection.css';
import SoundPlayer from '../../atoms/SoundPlayer/SoundPlayer';
import SoundTitle from '../../atoms/SoundTitle/SoundTitle';
import ProgressBar from '../../atoms/SoundProgressBar/ProgressBar';

const SoundSection = ( ) => {
    return(
      <div>
        <SoundPlayer />
        <SoundTitle />
        <ProgressBar />
      </div>
    );
};

export default SoundSection;
