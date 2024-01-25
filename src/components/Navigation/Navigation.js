import React, { useState } from 'react';
import Arrow from "../icons/Arrow";

const Navigation = (props) => {
    const configNav = [
        { id: 0, title: 'Posts' },
        { id: 1, title: 'Comments' },
        { id: 2, title: 'Albums' },
        { id: 3, title: 'Photos' },
        { id: 4, title: 'Todos' },
        { id: 5, title: 'Users' }
    ];

    const [isArrowClicked, setArrowClicked] = useState(false);

    const handleArrowClick = () => {
        setArrowClicked(!isArrowClicked);
    };

    return (
        <div className={`blockNav `}>
            <div className={`arrow-btn ${isArrowClicked ? 'active__arrow-btn' : ''} `}>
                <Arrow onClick={handleArrowClick} />
            </div>

            <ul className={`navigationList ${isArrowClicked ? 'navigationList-none' : ''}  `}>
                {configNav.map((navItem) => (
                    <li onClick={() => props.changeNav(navItem.title)} key={navItem.id}>
                        {navItem.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
