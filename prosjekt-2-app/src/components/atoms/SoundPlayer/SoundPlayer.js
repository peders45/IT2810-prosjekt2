import React from 'react';
import AudioPlayer from "react-modular-audio-player";
//import soundfile from '../SoundPlayer/coolsound.mp3';

const SoundPlayer = ({selectedSound}) => {
    return(
        <div>
          <audio controls autoplay preload="auto">
            <source src='${selectedSound}' type="audio/waw" />
            Your browser does not support the audio element.
          </audio>
        </div>
    );
}

export default SoundPlayer;
