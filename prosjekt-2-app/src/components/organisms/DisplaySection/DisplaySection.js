import React from 'react';
import SoundPlayer from '../../atoms/SoundPlayer/SoundPlayer';
import TextArea from '../../atoms/TextArea/TextArea'
import './DisplaySection.css';

const text = JSON.stringify({text:{sections:[`They jumped from the burning floors—
one, two, a few more,
higher, lower.`, `The photograph halted them in life,
and now keeps them   
above the earth toward the earth.`, `Each is still complete,
with a particular face
and blood well hidden.`, `There’s enough time
for hair to come loose,
for keys...`]}})

const DisplaySection = ({selectedTab}) => {
    return(
        <div className="DisplaySection-container">
            <h1>{selectedTab}</h1>
            <SoundPlayer />
            <TextArea text={text}/>
        </div>
    );
};

export default DisplaySection;
