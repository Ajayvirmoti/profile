import React from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import "./Toggle.css";
import SideBar from '../SideBar/SideBar';
import { useState } from 'react';
const Toggle = () => {
    const [isToggle, setToggle] = useState(true);
    const toggleClickHandler = () => {
        setToggle(!isToggle);
    }
    return (
        <div className='toggle'>
            {
                // isToggle ? <HiOutlineMenuAlt3 onClick={toggleClickHandler} /> : <SideBar/>
            }
        </div>
    );
}

export default Toggle;
