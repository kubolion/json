import React from 'react';

const Arrow = ({ onClick }) => {
    return (
        <svg
            className="arrow-svg"
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            onClick={onClick}
        >
            <path
                d="M0.390137 19.2758L8.59597 11.052L0.390137 2.82825L2.91639 0.302002L13.6664 11.052L2.91639 21.802L0.390137 19.2758Z"
                fill="black"
                fillOpacity="0.87"
            />
        </svg>
    );
};

export default Arrow;