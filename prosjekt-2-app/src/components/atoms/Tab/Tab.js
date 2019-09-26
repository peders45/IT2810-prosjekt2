import React from 'react';
import './Tab.css'

const Tab = ({ children, selectedTab, setSelectedTab}) => {
    return(
        <label className="tab-container">
            <input className="tab-checkbox"
                type="radio"
                checked={selectedTab === children}
                onChange={() => setSelectedTab(children)}
            />
            <div className="tab-button">{children}</div>
        </label>
    );
};

export default Tab;
