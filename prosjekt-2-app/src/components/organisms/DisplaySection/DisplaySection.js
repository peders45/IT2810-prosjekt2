import React from 'react';
import './DisplaySection.css';

const DisplaySection = ({selectedTab}) => {
    return(
        <div className="DisplaySection-container">
            <h1>{selectedTab}</h1>
        </div>
    );
};

export default DisplaySection;