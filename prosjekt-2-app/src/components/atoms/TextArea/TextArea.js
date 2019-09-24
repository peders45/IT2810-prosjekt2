import React, { useEffect, useState } from 'react';

const TextArea = ({selectedText, selectedTab}) => {
    const [textSection, setTextSection] = useState([]);
    const url = 'media/text/'+selectedTab+'/'+selectedText+'.json'

    useEffect(() => {
        const currentTextString = sessionStorage.getItem(selectedText + selectedTab);
        if (currentTextString != null) {
            const currentTextSection = JSON.parse(currentTextString)
            setTextSection(currentTextSection);
        } else {
            getTextSection();
        }
    }, [selectedText, selectedTab]);

    async function getTextSection() {
      const response = await fetch(url);
      const textSection = await response.json();
      const textSectionString = JSON.stringify(textSection);
      sessionStorage.setItem(selectedText + selectedTab, textSectionString);
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
