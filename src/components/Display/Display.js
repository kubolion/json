import React from 'react';


const Display = (props) => {
    console.log("render display")
    return (
        <div className="display">
            {props.heading}
        </div>
    );
};

export default Display;