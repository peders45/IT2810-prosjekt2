import React from 'react';

const SoundPlayer = () => {
    return(
        <div>
          <audio controls autoPlay preload="auto">
            <source src="coolsound.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
    );
}

export default SoundPlayer;
