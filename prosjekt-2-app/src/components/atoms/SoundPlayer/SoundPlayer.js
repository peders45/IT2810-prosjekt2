import React, { useEffect } from 'react';

import './SoundPlayer.css'


//Functional component for playing sound
//Takes in selected sound and selected tab as props
//Combined selected sound and selected tab will giv the end path of the file to be played which is shown in the setAttribute method
const SoundPlayer = ({selectedSound, selectedTab}) => {
  useEffect(() => {
    if (selectedSound && selectedTab){
    document.getElementById('audioPlayer').setAttribute('src', 'media/sound/'+ selectedTab + '/' + selectedSound + '.mp3');
  }}, [selectedSound, selectedTab])

    return(
        <div>
          <audio className='audioPlayer' id='audioPlayer' controls autoPlay preload="auto">
            <source src={ 'media/sound/'+ selectedTab + '/' + selectedSound + '.mp3'} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
    );
}

export default SoundPlayer;
