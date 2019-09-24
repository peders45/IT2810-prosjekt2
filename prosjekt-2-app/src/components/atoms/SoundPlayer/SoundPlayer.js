import React, { useEffect, useState } from 'react';

const SoundPlayer = ({selectedSound, selectedTab}) => {
  useEffect(() => {
    document.getElementById('audioPlayer').setAttribute('src', 'media/wav/'+ selectedTab + '/' + selectedSound + '.wav');
  }, [selectedSound, selectedTab])
  
    return(
        <div>
          <audio id='audioPlayer' controls autoPlay preload="auto">
            <source src={ 'media/wav/'+ selectedTab + '/' + selectedSound + '.wav'} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
    );
}

export default SoundPlayer;
