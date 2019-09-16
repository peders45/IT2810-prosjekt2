import React from 'react';

const SoundPlayer = ({selectedSound}) => {
    return(
        <div>
          <audio controls autoPlay preload="auto">
            <source src={selectedSound} type="audio/waw" />
            Your browser does not support the audio element.
          </audio>
        </div>
    );
}

export default SoundPlayer;
