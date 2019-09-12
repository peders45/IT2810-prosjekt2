import React from 'react';

const Tab = ({ children, selected, setSelectedTab}) => {
    return(
        <div>
            <button
                type="Button"
                checked={selected === children}
                onClick={() => setSelectedTab(children)}
            > {children} </button>

        </div>
    );
};

export default Tab;