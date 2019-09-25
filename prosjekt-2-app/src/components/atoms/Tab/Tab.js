import React from 'react';
import './Tab.css'

const Tab = ({ children, selectedTab, setSelectedTab}) => {
    return(
        <div>
            <button
                className="tab-button"
                type="Button"
                checked={selectedTab === children}
                onClick={() => setSelectedTab(children)}
            > {children} </button>

        </div>
    );
};

export default Tab;
