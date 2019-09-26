import React from 'react';
import CheckboxSection from '../../molecules/CheckboxSection/CheckboxSection';
import './SelectorSection.css'

//Functional component combining all the media selectors into one component of selectors
//Takes in the neccesary props and passing them to the components requiring those props
const SelectorSection = ({
    mediaCategories,
    setSelectedSound,
    setSelectedImage,
    setSelectedText,
    selectedSound,
    selectedImage,
    selectedText
}) => {
    return(
        <ul className='selectorSection'>
        {mediaCategories.map((media, i) => {
            let setSelected = null
            let selected = null
            switch(media.type){
                case 'Bilde':
                setSelected = setSelectedImage;
                selected = selectedImage;
                break;
                case 'Tekst':
                setSelected = setSelectedText;
                selected = selectedText;
                break;
                case 'Lyd':
                setSelected  = setSelectedSound;
                selected = selectedSound;
                break;
                default:
            }
            return(
                <li key={"M" + i} >
                <h3>{media.type}</h3>
                <CheckboxSection
                category={media.categories}
                setSelected={setSelected}
                selected={selected}
                />
                </li>
            );
        })}
        </ul>
    );
};

export default SelectorSection;
