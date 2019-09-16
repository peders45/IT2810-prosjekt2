import React from 'react';

const SoundPlayer = () => {
    return(
        <div>
          <audio controls autoPlay preload="auto">
<<<<<<< HEAD
            <source src="coolsound.mp3" type="audio/mpeg" />
=======
            <source src={selectedSound} type="audio/waw" />
>>>>>>> 9f7e92b53775f3e065bbdc4e42cb02bd25b75b5b
            Your browser does not support the audio element.
          </audio>
        </div>
    );
}

export default SoundPlayer;
