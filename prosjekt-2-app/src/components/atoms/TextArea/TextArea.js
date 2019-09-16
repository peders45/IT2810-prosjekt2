import React from 'react'

const TextArea = ({text}) => {
    const textSection = JSON.parse(text);
    return(
        <div>
        {textSection.text.sections.map((section, i)=>{
            return(
            <p key={'S' + i}>{section}</p>
            )
        })}
        </div>
    );
}

export default TextArea