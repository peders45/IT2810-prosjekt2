import React, { useEffect, useState } from 'react';

//Functional component for showing images
//Takes in the selected text and selected tab as props
//The prop makes up the end part path of the text to be shown which is fetched as json using ajax
const TextArea = ({selectedText, selectedTab}) => {
    const [textSection, setTextSection] = useState([]);
    const url = selectedText && selectedTab ? 'media/text/'+selectedTab+'/'+selectedText+'.json' : null;

    useEffect(() => {
        if(url){
        const currentTextString = sessionStorage.getItem(selectedText + selectedTab);
        if (currentTextString != null) {
            const currentTextSection = JSON.parse(currentTextString)
            setTextSection(currentTextSection);
        } else {
            getTextSection();
        }
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
