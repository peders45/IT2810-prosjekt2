import React, { useEffect, useState } from 'react';

const TextArea = ({selectedText, selectedTab}) => {
    const [textSection, setTextSection] = useState([]);
    const url = 'media/text/'+selectedTab+'/'+selectedText+'.json'

    useEffect(() => {
        getTextSection();
    }, [selectedText, selectedTab]);
  
    async function getTextSection() {
      const response = await fetch(url);
      const textSection = await response.json();
      setTextSection(textSection);
    }

    return(
        <div>
        {textSection.text ? textSection.text.sections.map((section, i)=>{
            return(
            <p key={'S' + i}>{section}</p>
            )
        }) : <p >Text is loading...</p>}
        </div>
    );
}

export default TextArea