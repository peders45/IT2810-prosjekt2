import React from 'react';
import Sound from 'react-sound';
import soundfile from '../SoundPlayer/cool_sound.mp3';

const SoundPlayer = () => {
    return(
        <div>
          <Sound
            url={soundfile}
            playStatus={Sound.status.STOPPED}
            allow={'autoplay'}
            autoLoad={true}
            loop={true}
            onLoading={Sound.handleSongLoading}
            onPlaying={Sound.handleSongPlaying}
            onFinishedPlaying={Sound.handleSongFinishedPlaying} />
        </div>
    );
}

export default SoundPlayer;
