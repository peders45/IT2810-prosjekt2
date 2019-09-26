import React, { useEffect } from 'react';

import './SoundPlayer.css'

const SoundPlayer = ({selectedSound, selectedTab}) => {
  useEffect(() => {
    document.getElementById('audioPlayer').setAttribute('src', 'media/sound/'+ selectedTab + '/' + selectedSound + '.mp3');
  }, [selectedSound, selectedTab])
  
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
