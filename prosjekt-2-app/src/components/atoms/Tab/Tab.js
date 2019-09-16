import React from 'react';
import './Tab.css'

const Tab = ({ children, selected, setSelectedTab}) => {
    return(
        <div>
            <button
                className="tab-button"
                type="Button"
                checked={selected === children}
                onClick={() => setSelectedTab(children)}
            > {children} </button>

        </div>
    );
};

export default Tab;
